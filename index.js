const express = require("express");

const dotenv = require("dotenv");
const hotelRoomRoute = require("./virgo/routes/hotelRoom.route")
const UserRoute = require("./virgo/routes/User.route")
const connector = require("./virgo/Baseconnector/connectoDB")


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

