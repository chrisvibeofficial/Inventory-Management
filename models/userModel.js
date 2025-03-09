const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]

    },
        isAdmin: {
        type: Boolean,
        default: false
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    productId: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products"
    }]

}, { timestamps: true })

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel
