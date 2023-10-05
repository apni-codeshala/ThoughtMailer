const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { sendStarterMail } = require('../services/emailService')
const { JWT_KEY } = require('../config/serverConfig');
const UserRepository = require('../repository/userRepository');

class UserSevice {

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            console.log(data);
            const response = await this.userRepository.create(data);
            if(response) {
                await sendStarterMail(data.email);
            }
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in creating user inside service');
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log('Something went wrong in token creation');
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in token validation', error);
            throw error
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password validation");
            throw error;
        }
    }

    async signin(email, plainPassword) {
        try {
            
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            if(!passwordMatch) {
                console.log("Password doesn't match");
                throw {error: "Incorrect Password"};
            }
            const newJwt = this.createToken({email: user.email, id: user.id});
            return newJwt;
        } catch (error) {
            console.log("Something went in the sign in process in service layer");
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if(!response) {
                throw {error: "Invalid Token"};
            }
            const user = this.userRepository.getById(response.id);
            if(!user) {
                throw {error: "No user with corresponding token exist"}
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in auth process in user service");
            throw error;
        }
    }

    async getAll() {
        try {
            const users = await this.userRepository.getAll();
            return users;
        } catch (error) {
            console.log('Something went wrong in getting all the users in service layer');
            throw error;
        }
    }

};

module.exports = UserSevice;