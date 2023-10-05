const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            err: {},
            message: 'You had not provided all the required field',
            err: 'Email or password missing in signup request'
        });
    }
    next();
}

module.exports = {
    validateUserAuth
}