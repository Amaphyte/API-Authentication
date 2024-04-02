import express from "express";
import requireAuth from "../middleware/requireAuth.js"

import hotelFunc from "../controller/HotelRoom.controller.js";

const router = express.Router();

router.use(requireAuth)

//To get Lisof Rooms
router.get("/", hotelFunc.getHotelRooms);
//To get a Single Room by ID
router.get("/:id", hotelFunc.getHotelRoom);
//To create an Hotel Room
router.post("/", hotelFunc.createHotelRoom);
//To update an Hotel Room
router.patch("/:id", hotelFunc.updateHotelRoom);
//To delete an Hotel Room
router.delete("/:id", hotelFunc.deleteHotelRoom);

export default router;
