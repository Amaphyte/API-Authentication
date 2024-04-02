import express from "express";

import dotenv from "dotenv";
import hotelRoomRoute from "./virgo/routes/hotelRoom.route"
import UserRoute from "./virgo/routes/User.route"
import connector from "./virgo/Baseconnector/connectoDB"


const app = express();


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use("/api/user", UserRoute);

app.use("/api/hotels", hotelRoomRoute);




connector(  process.env.MONGO_URL, ()=> {  
  app.listen(process.env.PORT, () => {

    console.log("server is running on port 3000");
  })}
)


console.log("URL: ",process.env.MONGO_URL )

