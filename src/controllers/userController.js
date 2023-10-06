const UserService = require('../services/userService');

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const response = await userService.create(req.body);
        console.log(response);
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong inside user controller, in creating user");
        return res.status(400).json({
            success: false,
            message: "User was not create",
            data: {},
            err: error
        })
    }
}

const signin = async (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password
        const response = await userService.signin(email, password);
        console.log(response);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Password match and token is send and signin done'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Something went wrong in sign in',
            data: {},
            success: false,
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'User is autheticated an token is valid'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong in authentication',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    signup,
    signin,
    isAuthenticated
}