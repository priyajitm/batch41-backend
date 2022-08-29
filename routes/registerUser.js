import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
const router = Router();


// receiving the request
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body; // fetching data from request body

    const user = await User.findOne({ email: email }); // checking if user exists on DB by email as an identifier

    if (user) {
      res.status(200).send({ message: "User Exists" }); // if user exists in db
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10); // encrypting the password

      // creating data object which we will store in DB
      const userData = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: encryptedPassword,
      });

      await userData.save(); // saving the data on DB
      res.status(201).send("User Registered"); // sending out the response back to requestor
    }
  } catch (error) { // if database connection error
    console.log(error);
    res.status(500).send("Database Error");
  }
});

export default router;
