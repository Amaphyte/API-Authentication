"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: " authorization token required" });
    }
    console.log("authorization: ", authorization);
    const token = authorization.split(" ")[1];
    try {
        const { _id } = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        const user = await user_1.default.findById(_id);
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.default = requireAuth;
//# sourceMappingURL=requireAuth.js.map