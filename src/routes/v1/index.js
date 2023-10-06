const express = require('express');

const { signup, signin, isAuthenticated } = require('../../controllers/userController');
const { getRandomThought, getAllThoughts } = require('../../controllers/thoughtController');
const { validateUserAuth } = require('../../middlewares/auth-request-validator');

const router = express.Router();

// SignUp routes
router.post('/signup', validateUserAuth, signup);
router.post('/login', validateUserAuth, signin);
router.get('/isAuthenticated', isAuthenticated);

// Login routes
router.get('/thought', getRandomThought);
router.get('/thoughts', getAllThoughts);

module.exports = router;