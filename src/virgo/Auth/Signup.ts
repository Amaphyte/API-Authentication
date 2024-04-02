import bcrypt from "bcrypt"
import User from "../models/user"
import validator from "validator"
import { userInterface } from "../interface/userInterface"

export const Signup = async function(email: string, password: string, name:string ): Promise<userInterface | null> {
    if(!email|| !password || !name){
        throw Error("Enter email or password")
    }
    const emailCheck = validator.isEmail(email)
    
    
    if (emailCheck) {
        const exist = await User.findOne({email: email })
        const users: userInterface[] = await this.find()
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

        const user = await this.create({
            name, 
            email, 
            password:hash, 
            admin: false
        })
    
        return user
    }
    }

    
return null
    
    
}