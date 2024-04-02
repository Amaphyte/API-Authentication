
import { Document } from "mongoose"
export interface userInterface extends Document {
    name: string,
    email: string,
    password: string,
    admin: boolean

}