
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Model } from "mongoose";
import {Request, Response} from "express"
import { env } from 'node:process';
import User from "../models/user";
import { userInterface } from "../interface/userInterface";
import { UserObj } from "../interface/UserObj";
import { Login } from "../Auth/Login";
import { Signup } from "../Auth/Signup";

type secret = string 


const createToken = (_id: string) => {
  const Secret: secret = env.SECRET as secret
  console.log("process secret: ", env.SECRET)
  return  jwt.sign({_id}, Secret, {expiresIn: "3d"})
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, admin  } = req.body;

    console.log("password: ", password)

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)
    console.log("hash : ", hash )

    const user = await User.create({
        name, 
        email, 
        password: hash,
        admin
    })

    user.save()
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body

    console.log("update: ", update)
    const userupdate = await User.findByIdAndUpdate(id, update);
   
      res.status(200).json(userupdate);
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);


    res.status(200).json(deleteUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


const userSignup = async(req: Request, res: Response) => {
  console.log("hey")
  const {email, password,name} = req.body
    try{

        const user = await Signup(email, password, name)
       const token = createToken(user._id)
        res.status(200).json({email, token, message:"successfully signup"})
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
}

const userLogin = async(req: Request, res: Response) => {

  const {email, password} = req.body
  console.log("password: ", password)
    try{
      
        const user = await Login(email, password) 
        console.log("user check: ", user)
        const token = createToken(user._id)
        res.status(200).json({email, token, message:"successfully login"})
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
}

const userFunc = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userSignup,
  userLogin
}

export default userFunc;
