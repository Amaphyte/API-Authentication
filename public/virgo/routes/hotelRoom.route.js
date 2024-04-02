"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requireAuth_js_1 = __importDefault(require("../middleware/requireAuth.js"));
const HotelRoom_controller_js_1 = __importDefault(require("../controller/HotelRoom.controller.js"));
const router = express_1.default.Router();
router.use(requireAuth_js_1.default);
//To get Lisof Rooms
router.get("/", HotelRoom_controller_js_1.default.getHotelRooms);
//To get a Single Room by ID
router.get("/:id", HotelRoom_controller_js_1.default.getHotelRoom);
//To create an Hotel Room
router.post("/", HotelRoom_controller_js_1.default.createHotelRoom);
//To update an Hotel Room
router.patch("/:id", HotelRoom_controller_js_1.default.updateHotelRoom);
//To delete an Hotel Room
router.delete("/:id", HotelRoom_controller_js_1.default.deleteHotelRoom);
exports.default = router;
//# sourceMappingURL=hotelRoom.route.js.map