import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body; // getting username/password from request body

    const user = await User.findOne({ email: username }); // checking if user with this username/email exists in DB

    // if user exists in DB
    if (user) {
        // comparing the hashed password in db for the user with password from request body
        const comparePassword = await bcrypt.compare(password, user.password); 

        if (comparePassword) { // if compare is success/true
            res.status(200).send({ message: "Login Successful" }); // sending success response
        } else {
            res.status(401).send({ message: "username/password is wrong" }); // sending unsuccessful response
        }
    } else {
      res.status(401).send({ message: "username/password is wrong" }); // sending unsuccessful response
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
