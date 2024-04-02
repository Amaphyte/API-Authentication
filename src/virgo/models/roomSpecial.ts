import {model, models, Schema} from "mongoose";


const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    roomType:{
      type: String,
      required : true
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
  },
  {
    timestamps: true,
  }
);
const Room = models.Rooms || model("Rooms", hotelSchema)
export default Room


