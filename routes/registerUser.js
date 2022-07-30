import { Router } from 'express'
import User from '../models/User.js'
const router = Router()

router.post('/', async (req, res) => {
    try {
        const {firstname, lastname, email, password} = req.body
        const user = await User.findOne({email})

        if (user) {
            res.status(200).send({message: 'User Exists'})
        }

        const userData = new User({firstname: firstname, lastname: lastname, email: email, password: password})

        await userData.save()
        res.status(201).send('User Registered')
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Database Error')
    }
})

export default router;