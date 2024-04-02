"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hotelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});
const Room = mongoose_1.models.Rooms || (0, mongoose_1.model)("Rooms", hotelSchema);
exports.default = Room;
//# sourceMappingURL=roomSpecial.js.map