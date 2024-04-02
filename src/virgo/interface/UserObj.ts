import { userInterface } from "./userInterface";
import { Model } from "mongoose";

export interface UserObj extends Model<userInterface> {
   
    Login(email: string, password:string):  Promise<userInterface | null>,
    Signup(email: string, password: string, name: string):  Promise<userInterface | null>
}