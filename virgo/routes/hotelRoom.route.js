const express = require("express");
const router = express.Router();
const {
  getHotelRooms,
  getHotelRoom,
  deleteHotelRoom,
  createHotelRoom,
  updateHotelRoom
} = require("../controller/HotelRoom.controller.js");

//To get Lisof Rooms
router.get("/", getHotelRooms);
//To get a Single Room by ID
router.get("/:id", getHotelRoom);
//To create an Hotel Room
router.post("/", createHotelRoom);
//To update an Hotel Room
router.patch("/:id", updateHotelRoom);
//To delete an Hotel Room
router.delete("/:id", deleteHotelRoom);

module.exports = router;
