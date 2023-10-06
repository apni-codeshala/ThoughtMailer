const express = require('express');

const { signup, signin, isAuthenticated } = require('../../controllers/userController');
const { getRandomThought, getAllThoughts } = require('../../controllers/thoughtController');
const { validateUserAuth } = require('../../middlewares/auth-request-validator');

const router = express.Router();

// SignUp routes
router.post('/users', validateUserAuth, signup);
router.get('/users', validateUserAuth, signin);
router.get('/users/isAuthenticated', validateUserAuth, isAuthenticated);

// Login routes
router.get('/thought', getRandomThought);
router.get('/thoughts', getAllThoughts);

module.exports = router;