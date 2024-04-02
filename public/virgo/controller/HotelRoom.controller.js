"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roomSpecial_1 = __importDefault(require("../models/roomSpecial"));
const getHotelRooms = async (req, res) => {
    try {
        const hotelRooms = await roomSpecial_1.default.find();
        res.status(200).json(hotelRooms);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getHotelRoom = async (req, res) => {
    try {
        console.log(req.user);
        const { id } = req.params;
        const hotel1 = await roomSpecial_1.default.findById(id);
        res.status(200).json(hotel1);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createHotelRoom = async (req, res) => {
    const user = req.user;
    console.log("body: ", req.body);
    try {
        if (!user.admin) {
            throw Error("user not authorized");
        }
        const { name, roomType, quantity, price } = req.body;
        const room = await roomSpecial_1.default.create({
            name, roomType, quantity, price
        });
        room.save();
        res.status(200).json(room);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateHotelRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const Hotel = await roomSpecial_1.default.findByIdAndUpdate(id, update);
        res.status(200).json(Hotel);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteHotelRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteHotelRoom = await roomSpecial_1.default.findByIdAndDelete(id);
        res.status(200).json(deleteHotelRoom);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const hotelFunc = {
    getHotelRooms,
    getHotelRoom,
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom,
};
exports.default = hotelFunc;
//# sourceMappingURL=HotelRoom.controller.js.map