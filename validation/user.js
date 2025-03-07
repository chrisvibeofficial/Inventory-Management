import joi from 'joi';

export const registerUserSchema = joi.object().keys({
    fullname: joi.string().min(3).max(20).required(),
    email: joi.string().trim().email().required,
    password: joi.string().trim().required,
    gender: Joi.string().trim().valid('male, "female').required,

});
export const loginSchema = joi.object().keys({
    email: joi.string().trim().min(6).max(8).email().required,
    password: joi.string().trim().min(6).max(8).required,
 });