const User = require("../models/user");
const bcrypt = require("bcrypt")

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body

    console.log("update: ", update)
    const userupdate = await User.findByIdAndUpdate(id, update);
   
      res.status(200).json(userupdate);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);


    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const userSignup = (req, res) => {
    try{

    } catch {

    }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
