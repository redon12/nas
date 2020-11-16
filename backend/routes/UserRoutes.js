import express from 'express';
import User from '../models'
import { getToken } from '../util';
import multer from 'multer'
const router = express.Router()
import multer from 'multer'

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
    
    try{
        if (req.body.pwd != req.body.repwd){
            res.status(400).json({message:"passwords do not match"})
        }
        if (req.body.pwd.length < 8){
            res.status(400).json({message:"password must be greater than 8 characters"})
        }

        else{

        const registerUser = new User({
        lname:req.body.lname,
        fname:req.body.fname,
        email:req.body.email,
        pwd:req.body.pwd,
        isAdmin:false,
        isVerified:false

    })
    const newPatient = await registerUser.save()
    res.send(newPatient)
    }
    
}catch(error){
    console.log(error)
    res.status(400).json({message:"Email already exist"});}
    
})
router.post("/signin", async (req, res) => {
    try{
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
    else{
        res.status(400).json({message:"invalid email and password"})
    }}
    catch(error){
        res.send(400).json({message:"Login Failed server is down"})
    }

})

let uploadFile = ''
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,__dirname+"/public")
    },
    filename:(req, file, cb)=>{
        let filenamez = file.fieldname +''+Date.now()+file.originalname
        cb(null, filenamez)  
        uploadFile = filenamez
    }
    
})

const upload = multer({
    storage:storage
}).any("prof")
router.post("/uploadimage", upload, async (req, res)=>{
    res.send(uploadFile)

    // upload(req, res, (err)=>{
    //     if(err){
    //         console.log(JSON.stringify(err))
    //     }
    //     else{
    //         console.log("file name is "+req.file.filename)
    //     }
    // })
    console.log(uploadFile)
})




router.get("/newpost", async (req, res)=>{
    try{
        const listOfPosts = Posts.find()
        res.send(listOfPosts)
    }
    catch(error){
        res.status(400).send({
            err: error
        })
    }
})
router.get("/image/:id",(req, res)=>{
    res.sendFile(__dirname+"/public/"+req.params.id)
}
)
export default router