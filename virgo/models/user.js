const { model, models, Schema}= require("mongoose");

const userSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true
        
    },

    name: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true
    },


    admin: {
        type: Boolean,
        required: true
    },



},{timestamps: true})




const User = models.Users || model("Users", userSchema)
module.exports = User

