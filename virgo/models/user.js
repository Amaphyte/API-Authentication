const { model, models, Schema}= require("mongoose");
const bcrypt = require("bcrypt")
const validator = require("validator")

const userSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true
        
    },

    name: {
        type: String,
        unique: true,
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


userSchema.statics.Signup = async function(email, password, name ) {
    if(!email|| !password || !name){
        throw Error("Enter email or password")
    }
    const emailCheck = validator.isEmail(email)
    if (emailCheck) {
        const exist = await this.findOne({email: email })
        const users = await this.find()
            users.forEach(user => {
                if (user.name === name ){
                    throw Error("username already exist")
                }
            });
       
        
    if (exist) {
        throw Error("user already exists")
    } else {

        
   


        const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)
    console.log("hash : ", hash )

    const user = await this.create({name, email, password:hash, admin: false})
    return user
    }
    }

    

    
    
}


userSchema.statics.Login = async function(email, password ) {
    console.log("inside login password: ", password)
    if(!email || !password){
        throw Error("Enter email or password")
    }
   
    const user = await this.findOne({email: email })
    console.log("user password: ", user)
        if (user) {
            const match = await bcrypt.compare( password, user.password)
            console.log("match : ", match )
            if (!match) {
                throw Error("incorrect password")
            } else {
                return user
            }
            
            
        }
   
    
    }

    

    
    


const User = models.Users || model("Users", userSchema)
module.exports = User

