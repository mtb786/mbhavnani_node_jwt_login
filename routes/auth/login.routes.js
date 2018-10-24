const cors = require('cors');
const USER_CONTROLLER = require('../../controller/user.controller');

const express = require('express');
const router = express.Router();
const authenticate = require('../../middleware/autheticate');
const usermiddleware = require('../../middleware/usermiddleware');

router.post('/user',cors(),USER_CONTROLLER.LoginVerification);
router.post('/userinfo',cors(),authenticate,USER_CONTROLLER.UserDetails);
router.post('/userdelete',cors(),USER_CONTROLLER.UserDelete);
router.post('/useredit',cors(),authenticate,usermiddleware,USER_CONTROLLER.UserEdit);
// app.post('/userupdate', cors(), USER_CONTROLLER.UsersUpdate);


// @type  POST
// @route /api/auth/login
// @desc  user authentication
// @access public
router.post('/login',cors(), USER_CONTROLLER.UserLogin);
router.get('/usersearch',cors(),USER_CONTROLLER.UserSearch);
router.post('/forgetpassword',cors(),USER_CONTROLLER.UserForgetPassword);

// lead controller export



module.exports = router;