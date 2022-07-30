import mongoose from 'mongoose';

const uri = "mongodb+srv://priyajit:monika@cluster0.bb04n.mongodb.net/?retryWrites=true&w=majority";
const DBConnect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('DB Connected')
        })
    } catch (error) {
        console.log(error)
    }
}

export default DBConnect;