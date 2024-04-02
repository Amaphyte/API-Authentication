import express from "express"
import userFunc from "../controller/UserController.js";

const router = express.Router()
//To get Lisof Rooms
router.get("/", userFunc.getUsers);
//To get a Single Room by ID
router.get("/:id", userFunc.getUser);
//To create an Hotel Room
router.post("/", userFunc.createUser);
//to signup user
 router.post("/signup", userFunc.userSignup)
 //to login
 router.post("/login", userFunc.userLogin)
//To update an Hotel Room
router.patch("/:id", userFunc.updateUser);
//To delete an Hotel Room
router.delete("/:id", userFunc.deleteUser);

export default router;
