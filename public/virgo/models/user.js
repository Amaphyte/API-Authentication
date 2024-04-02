"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
userSchema.statics.Signup = async function (email, password, name) {
    if (!email || !password || !name) {
        throw Error("Enter email or password");
    }
    const emailCheck = validator_1.default.isEmail(email);
    if (emailCheck) {
        const exist = await this.findOne({ email: email });
        const users = await this.find();
        users.forEach(user => {
            if (user.name === name) {
                throw Error("username already exist");
            }
        });
        if (exist) {
            throw Error("user already exists");
        }
        else {
            const salt = await bcrypt_1.default.genSalt(10);
            const hash = await bcrypt_1.default.hash(password, salt);
            console.log("hash : ", hash);
            const user = await this.create({ name, email, password: hash, admin: false });
            return user;
        }
    }
};
userSchema.statics.Login = async function (email, password) {
    console.log("inside login password: ", password);
    if (!email || !password) {
        throw Error("Enter email or password");
    }
    const user = await this.findOne({ email: email });
    console.log("user password: ", user);
    if (user) {
        const match = await bcrypt_1.default.compare(password, user.password);
        console.log("match : ", match);
        if (!match) {
            throw Error("incorrect password");
        }
        else {
            return user;
        }
    }
};
const User = mongoose_1.models.Users || (0, mongoose_1.model)("Users", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map