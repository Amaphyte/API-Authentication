"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const hotelRoom_route_1 = __importDefault(require("./virgo/routes/hotelRoom.route"));
const User_route_1 = __importDefault(require("./virgo/routes/User.route"));
const connectoDB_1 = __importDefault(require("./virgo/Baseconnector/connectoDB"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/user", User_route_1.default);
app.use("/api/hotels", hotelRoom_route_1.default);
(0, connectoDB_1.default)(process.env.MONGO_URL, () => {
    app.listen(process.env.PORT, () => {
        console.log("server is running on port 3000");
    });
});
console.log("URL: ", process.env.MONGO_URL);
//# sourceMappingURL=index.js.map