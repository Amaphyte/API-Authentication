
import jwt from "jsonwebtoken"
import User from "../models/user"


const requireAuth  = async (req, res, next) => {
  const {authorization} = req.headers
  if(!authorization) {
    return res.status(401).json({error: " authorization token required"})

  }

  console.log("authorization: ", authorization)
 const token = authorization.split(" ")[1]
  try{

     const {_id} = jwt.verify(token, process.env.SECRET)

        const user = await User.findById(_id)
     
        req.user = user

     next()
  } catch(error){
    return res.status(500).json({error: error.message})
  }
}
export default requireAuth