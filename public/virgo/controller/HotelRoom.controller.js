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
const roomSpecial_1 = __importDefault(require("../models/roomSpecial"));
const getHotelRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelRooms = yield roomSpecial_1.default.find();
        res.status(200).json(hotelRooms);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const getHotelRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.user);
        const { id } = req.params;
        const hotel1 = yield roomSpecial_1.default.findById(id);
        res.status(200).json(hotel1);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const createHotelRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log("body: ", req.body);
    try {
        if (!user.admin) {
            throw Error("user not authorized");
        }
        const { name, roomType, quantity, price } = req.body;
        const room = yield roomSpecial_1.default.create({
            name, roomType, quantity, price
        });
        room.save();
        res.status(200).json(room);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const updateHotelRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = req.body;
        const Hotel = yield roomSpecial_1.default.findByIdAndUpdate(id, update);
        res.status(200).json(Hotel);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const deleteHotelRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteHotelRoom = yield roomSpecial_1.default.findByIdAndDelete(id);
        res.status(200).json(deleteHotelRoom);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const hotelFunc = {
    getHotelRooms,
    getHotelRoom,
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom,
};
exports.default = hotelFunc;
//# sourceMappingURL=HotelRoom.controller.js.map