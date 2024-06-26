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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const node_process_1 = require("node:process");
const requireAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Secret = node_process_1.env.SECRET;
    console.log("process secret: ", node_process_1.env.SECRET);
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: " authorization token required" });
    }
    console.log("authorization: ", authorization);
    const token = authorization.split(" ")[1];
    try {
        const { _id } = jsonwebtoken_1.default.verify(token, Secret);
        const user = yield user_1.default.findById(_id);
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.default = requireAuth;
//# sourceMappingURL=requireAuth.js.map