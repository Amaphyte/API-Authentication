"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const validator_1 = __importDefault(require("validator"));
const Signup = function (email, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email || !password || !name) {
            throw Error("Enter email or password");
        }
        const emailCheck = validator_1.default.isEmail(email);
        if (emailCheck) {
            const exist = yield user_1.default.findOne({ email: email });
            const users = yield this.find();
            users.forEach(user => {
                if (user.name === name) {
                    throw Error("username already exist");
                }
            });
            if (exist) {
                throw Error("user already exists");
            }
            else {
                const salt = yield bcrypt_1.default.genSalt(10);
                const hash = yield bcrypt_1.default.hash(password, salt);
                console.log("hash : ", hash);
                const user = yield this.create({
                    name,
                    email,
                    password: hash,
                    admin: false
                });
                return user;
            }
        }
        return null;
    });
};
exports.Signup = Signup;
//# sourceMappingURL=Signup.js.map