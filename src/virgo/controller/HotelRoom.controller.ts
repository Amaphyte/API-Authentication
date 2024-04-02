import Room from "../models/roomSpecial";
import { Request, Response, ErrorRequestHandler } from "express";

const getHotelRooms = async (req: Request, res: Response) => {
  try {
    const hotelRooms = await Room.find();
    res.status(200).json(hotelRooms);
  } catch (error: ErrorRequestHandler | null) {
    res.status(500).json({ message: error.message });
  }
};

const getHotelRoom = async (req: Request, res: Response) => {
  try {
    console.log(req.user)
    const { id } = req.params;
    const hotel1 = await Room.findById(id);
    res.status(200).json(hotel1);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHotelRoom = async (req: Request, res: Response) => {
const user = req.user
  console.log("body: ", req.body)   
  try {
if (!user.admin){
  throw Error("user not authorized")

}
    const { name, roomType, quantity, price  } = req.body;
    
    const room = await Room.create({
      name, roomType, quantity, price
    })
    

    room.save()
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHotelRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body
    const Hotel = await Room.findByIdAndUpdate(id, update);
    
      res.status(200).json(Hotel);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHotelRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteHotelRoom = await Room.findByIdAndDelete(id);
    
    res.status(200).json( deleteHotelRoom );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const hotelFunc  = {
  getHotelRooms,
  getHotelRoom,
  createHotelRoom,
  updateHotelRoom,
  deleteHotelRoom,
};


export default hotelFunc