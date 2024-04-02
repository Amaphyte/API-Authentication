
import User from "../models/user"
import { userInterface } from "../interface/userInterface"
import bcrypt from "bcrypt"

export const Login = async function(email: string, password: string): Promise<userInterface | null> {
    console.log("inside login password: ", password)
    if(!email || !password){
        throw Error("Enter email or password")
    }
   
    const user = await User.findOne({email: email })
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
        return null
    
    }