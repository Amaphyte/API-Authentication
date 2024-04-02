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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_process_1 = require("node:process");
const user_1 = __importDefault(require("../models/user"));
const Login_1 = require("../Auth/Login");
const Signup_1 = require("../Auth/Signup");
const createToken = (_id) => {
    const Secret = node_process_1.env.SECRET;
    console.log("process secret: ", node_process_1.env.SECRET);
    return jsonwebtoken_1.default.sign({ _id }, Secret, { expiresIn: "3d" });
};
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.find();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, admin } = req.body;
        console.log("password: ", password);
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        console.log("hash : ", hash);
        const user = yield user_1.default.create({
            name,
            email,
            password: hash,
            admin
        });
        user.save();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = req.body;
        console.log("update: ", update);
        const userupdate = yield user_1.default.findByIdAndUpdate(id, update);
        res.status(200).json(userupdate);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteUser = yield user_1.default.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hey");
    const { email, password, name } = req.body;
    try {
        const user = yield (0, Signup_1.Signup)(email, password, name);
        const token = createToken(user._id);
        res.status(200).json({ email, token, message: "successfully signup" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log("password: ", password);
    try {
        const user = yield (0, Login_1.Login)(email, password);
        console.log("user check: ", user);
        const token = createToken(user._id);
        res.status(200).json({ email, token, message: "successfully login" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const userFunc = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    userSignup,
    userLogin
};
exports.default = userFunc;
//# sourceMappingURL=UserController.js.map