import express, { Response, NextFunction} from "express";
import requireAuth from "../middleware/requireAuth.js"
import { reqq } from "../interface/reqq";
import hotelFunc from "../controller/HotelRoom.controller.js";

const router = express.Router();


type mid = (req: reqq, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>

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
