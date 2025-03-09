const joi = require('joi');

exports.registerUserSchema = joi.object().keys({
    fullName: joi.string().min(3).max(20).required(),
    email: joi.string().trim().email().required(),
    gender: joi.string().valid('male', 'female').required(), // Updated validation


    password: joi.string().trim().required(),
   
});
exports.loginSchema = joi.object().keys({
    email: joi.string().trim().min(5).max(50).email().required(),
    password: joi.string().trim().min(3).max(20).required(),
 });
