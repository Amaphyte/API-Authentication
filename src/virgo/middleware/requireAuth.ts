
import jwt , {JwtPayload} from "jsonwebtoken"
import User from "../models/user"
import  {Request, Response, NextFunction} from "express"

import { env } from 'node:process';
import { reqq } from "../interface/reqq";

type secret = string 

interface id extends  JwtPayload {
  _id: string
}





const requireAuth  = async (req: reqq, res: Response, next: NextFunction) => {
  const Secret: secret = env.SECRET as secret
console.log("process secret: ", env.SECRET)
  const {authorization} = req.headers
  if(!authorization) {
    return res.status(401).json({error: " authorization token required"})

  }

  console.log("authorization: ", authorization)
 const token = authorization.split(" ")[1]
  try{

     const {_id}  = jwt.verify(token, Secret) as id;
  

        const user = await User.findById(_id)
     
       
        req.user = user
        next()

     
  } catch(error: any){
    return res.status(500).json({error: error.message})
  }
}
export default requireAuth