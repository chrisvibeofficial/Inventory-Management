const { registerUser, verifyUser, loginUser, forgetUserPassword, resetUserPassword, changeUserPassword } = require('../controllers/userController');

const router = require('express').Router();

router.post('/user', registerUser);
router.get('/verify/user/:token', verifyUser);
router.post('/login/user/', loginUser);
router.post('/forgot=password/user', forgetUserPassword);
router.post('/reset=password/user/:token', resetUserPassword);
router.post('/change/password/user/:id', changeUserPassword);

module.exports = router