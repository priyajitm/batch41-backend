import mongoose from "mongoose";

const User = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        lowercase: true
    },
    password: String,
    registeredOn: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('owners', User)