const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    userSignup
} = require("../controller/UserController.js");


//To get Lisof Rooms
router.get("/", getUsers);
//To get a Single Room by ID
router.get("/:id", getUser);
//To create an Hotel Room
router.post("/", createUser);
// router.post("/signup", userSignup)
//To update an Hotel Room
router.patch("/:id", updateUser);
//To delete an Hotel Room
router.delete("/:id", deleteUser);

module.exports = router;
