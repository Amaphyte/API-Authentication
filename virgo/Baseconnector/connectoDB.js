
const mongoose = require("mongoose");
const connector = async (  url, cb ) => {
    try { 
        console.log( "from function: ", url);
     await mongoose.connect(
       url,
       {dbName: "Hotel-API"}
     )
        cb()
     console.log("connected to database!");
   } catch {
       console.log("connection failed!");
     }
   
   
   }

   module.exports = connector