import mongoose from 'mongoose';
import {mongoURI} from './datapath.js'

const DBConnect = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('DB Connected')
        })
    } catch (error) {
        console.log(error)
    }
}

export default DBConnect;