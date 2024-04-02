
import {connect, ConnectOptions} from "mongoose"

const connectOptions: ConnectOptions = {
  dbName: "Hotel-API" 
}
const connector = async (  url: any , cb: any) => {
    try { 
        console.log( "from function: ", url);
     await connect(
       url,
       connectOptions
     )
        cb()
     console.log("connected to database!");
   } catch {
       console.log("connection failed!");
     }
   
   
   }

  export default connector