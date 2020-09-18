import express from 'express';
import User from '../models'
import { getToken } from '../util';
const router = express.Router()

router.get("/admin", async (req, res) => {
    try {
        const newUser = new User({
            fname: "josh",
            lname: "groban",
            email: "peterfrankmba@gmail.com",
            pwd: "3455",
            phone: "07025488825",
            isAdmin: true

        })
        const rUser = await newUser.save()
        res.send(rUser);

    } catch (error) {
        res.send({ error: error.message })
    }
})
router.get("/show", async (req, res) => {
    const showIt = await User.find()
    if (showIt) {
        res.send(showIt)
    }
})
router.get("/lili", async (req, res) => {
    const showIt = await User.findOne({
        email: "norbertmbafrank@gmail.com",
        pwd: "1234"
    })
    if (showIt) {
        res.send(showIt)
    }
})
router.post("/register", async (req, res) => {
    try{const registerUser = new User({
        lname:req.body.lname,
        fname:req.body.fname,
        email:req.body.email,
        phone:req.body.phone,
        pwd:req.body.pwd,
        isAdmin:false,
        isVerified:false

    })
    const newPatient = await registerUser.save()
    res.send(newPatient)
}catch(error){
    res.send("invalid Email or password");}
    
})
router.post("/signin", async (req, res) => {
    const signInUser = await User.findOne({
        email: req.body.email,
        pwd: req.body.pwd
    })

    if (signInUser) {
        res.send({
            _id: signInUser._id,
            name: signInUser.fname,
            email: signInUser.email,
            phone: signInUser.phone,
            isAdmin: signInUser.isAdmin,
            token: getToken(signInUser)

        })
        console.log(signInUser.email)
    }

})
   
export default router