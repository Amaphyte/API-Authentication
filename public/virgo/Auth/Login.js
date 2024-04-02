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
exports.Login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Login = function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("inside login password: ", password);
        if (!email || !password) {
            throw Error("Enter email or password");
        }
        const user = yield user_1.default.findOne({ email: email });
        console.log("user password: ", user);
        if (user) {
            const match = yield bcrypt_1.default.compare(password, user.password);
            console.log("match : ", match);
            if (!match) {
                throw Error("incorrect password");
            }
            else {
                return user;
            }
        }
        return null;
    });
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map