const { User } = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in creating a user inside repository');
            console.log(error);
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            return user;    
        } catch (error) {
            console.log('Something went wrong in repostory layer in getting a user by email');
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            return user;
        } catch (error) {
            console.log('Something went wrong in repository layer in getting the user by id');
            throw error;
        }
    }

    async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log('Something went wrong in getting all the users in repository layer', error);
            throw error;
        }
    }

};

module.exports = UserRepository;