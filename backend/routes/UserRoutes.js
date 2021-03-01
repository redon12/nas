import express from 'express';
import User, { newContest, newPost, regConty, payment, paymentDetails } from '../models'
import { getToken } from '../util';
const router = express.Router()
import multer from 'multer'
import cors from 'cors'
import Datauri from "datauri";
// import  cloudinary_config from "./config/cloudinary_config"
const path = require("path")
const cloudinary = require('cloudinary').v2;
import  { CloudinaryStorage }  from 'multer-storage-cloudinary';
let uploadFile = 'still Like that'
require("dotenv").config()

const MONGO_URL= "mongodb"//localhost/healthy
const API_KEY ="267177314333933"
const API_SECRET="qzPi3K8LNu9C66AGEPvuSW7WtP8"
const CLOUDINARY_NAME="norvirae"

// const storage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         cb(null,__dirname+"/public")
//         // console.log(__dirname+"/public")
//     },
//     filename:(req, file, cb)=>{
//         // console.log(req.body)
//         let filenamez = file.fieldname +''+Date.now()+file.originalname
//         uploadFile = "http://localhost:5001/users/imagess/"+filenamez
//         console.log("this file was changed")
//         // console.log(uploadFile)
//         cb(null, filenamez)  
        
//     }
    
// })

// const upload = multer({
//     storage:storage
// })

router.post("/freshpost", async (req, res)=>{
    try{
        console.log("we are in the new post route")
        const freshPost = new newPost({
            title:req.body.title,
            posts:req.body.post,
            // image: {$push:req.body.image}
        })
        const listOfPosts = await freshPost.save()
        res.send(listOfPosts)
    }
    catch(error){
        res.status(400).send({
            err: error
        })
    }
})


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
router.get("/fetchcontests" , async (req, res)=>{
    console.log("this piece of code of code must actually run")
    const allContest = await newContest.find()
    console.log(allContest)
    res.send(allContest)
})

router.post("/fetchcontestants", async (req, res)=>{
    console.log(req.body)
    const contestants = await regConty.find({
        contestIn:req.body.uniq
    })
    console.log(contestants)
    res.send(contestants)
})

router.post("/fetchallcontestants", async (req, res)=>{
    console.log(req.body)
    const AllContestants = await regConty.find()
    console.log(AllContestants)
    res.send(AllContestants)
})

router.post("/castvote", async (req, res)=>{
    try{
    console.log("just got in to cast a vote")
    console.log(req.body)
    const getNumVote = await regConty.findOne({contestantemail:req.body.email})
    const IndividualVote = await regConty.updateOne({
        contestantemail: req.body.email,
        contestIn:req.body.uniq
    },{vote:Number(req.body.vote) + Number(getNumVote.vote),})
    const authorizeIt = await paymentDetails.updateOne({
        _id:req.body.id
    },{authorized:true})
    console.log(req.body.id)
    res.send({msg:"vote was successful"})
    }
    catch(error){
        console.log(error)
    }
})


router.post("/verifier", async (req, res)=>{
    console.log(req.body)
    try{
    
    const IndividualVote = await regConty.updateOne({
        _id: req.body.id,
    },{verified:true,})
    
    res.send({msg:"Contestant has been Verified"})
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
})

router.post("/fetchcontestantra", async (req, res)=>{
    try{
    console.log(req.body)
    const Individual = await regConty.findOne({
        contestantemail:req.body.email,
        contestIn:req.body.uniq
    })
    console.log(Individual)
    res.send(Individual)}
    catch(error){
        console.log(error)
        res.send({msg:error})
    }
})


router.get("/removecontests" , async (req, res)=>{
    const allContest = await newContest.remove()
    console.log(allContest)
    res.send(allContest)
})

router.get("/seecontests" , async (req, res)=>{
    const allContest = await newContest.find()
    console.log(allContest)
    res.send(allContest)
})



router.get("/removecontys", async (req, res)=>{
    const commot = await(regConty.remove())
    res.send(commot)
})
router.get("/allcontys", async (req, res)=>{
    res.send(await regConty.find())
})

router.post("/regcontestant", async (req, res)=>{
    console.log("contestant registration was executed")
    console.log(req.body)
    const newCon = new regConty({
        fname:req.body.fname,
        lname:req.body.lname,
        constestantpics: req.body.pics,
        contestantdept: req.body.dept,
        contestantDOB:req.body.DOB,
        contestantfaculty: req.body.faculty,
        contestantemail: req.body.email,
        contestantphone:req.body.phone,
        contestantlevel:req.body.level,
        contestIn:req.body.contestIn,
        payment:req.body.payment
        
    })

    const newConty = await newCon.save()
    res.send(newConty)
})
// under edit
// Cloudinary router starts here-------------------------------------------------------------
cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})

console.log(API_KEY)
console.log(CLOUDINARY_NAME)
console.log(API_SECRET)
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file)=> {
    console.log(file)
    let Ftype = ""
    if (path.extname(file.originalname) == ".jpg"){
        Ftype = "jpg"
    }else if (path.extname(file.originalname)== ".ico"){
        Ftype = "ico"
    }else if (path.extname(file.originalname)== ".png"){
        Ftype = "png"
    }
    return {folder: 'blog_images',
            format:Ftype,
            public_id: Date.now(),}
  },
});

const upload = multer({storage:storage})

// const Duri = Datauri()

// const DataU = req=> Duri.format(path.extname(req.file.originalname).toString(),req.file.buffer)

router.post("/imageuploads",upload.single("blogImage"), (req, res, next)=>{
    
    res.send("newpost",{imageLink:req.file.path})
})
// cloudinary router ends here--------------------------------------------------------------

router.post("/registercontest",upload.single("file"), async (req, res)=>{
    console.log("vote ran inside contest route")
    console.log(req.file.path)
   try{ 
       const regNewContest = new newContest ({
        cname:req.body.cname,
        cimage:req.file.path, //this is for online image upload
        // cimage:uploadFile, // this is for offline image upload
        cdeadline:req.body.cdeadline,
        cvoteprice:req.body.cvoteprice,
        cuniquename:req.body.cname + Date.now()
        

    })
    console.log("code ran inside routes")
    const newContests = await regNewContest.save()
    res.send({data:newContests})
}
    catch(error){
        res.send("there is an Error!")
        console.log(error)
   
    }
})

router.get("/fetchmsgs", async (req, res)=>{
    res.send(await paymentDetails.find())
})

router.post("/onefetchmsgs", async (req, res)=>{
    console.log("this was executed")
    res.send(await paymentDetails.findOne({_id:req.body.id}))
})

router.get("/deletemsgs", async (req, res)=>{
    res.send(await paymentDetails.remove())
})

router.post("/payments", async (req, res)=>{
    try{console.log(req.body)
    const payment = new paymentDetails({

        fullname:req.body.fullname,
        phone:req.body.phone,
        votePrice:req.body.votePrice,
        email:req.body.email,
        numVote:req.body.numVote,
        alertInfo:req.body.alertInfo,
        cEmail:req.body.cEmail,
        uniq:req.body.uniq,
        noVotes:req.body.noVotes


    }) 
    console.log("we got in to this part")
    const newPayment = await payment.save()
    res.send({msg:"it worked", newPayment})}
    catch(error){
        console.log(error)
        res.send(error)
    }
})

router.get("/createadmin", async (req, res)=>{
    console.log(req.body)
    try{
        

        const registerUser = new User({
            fname:"admin",
            lname:"admin",
            isAdmin:"true",
            verified:"true",
            pwd:"C@list5r",
            constestantpics: "",
            contestantdept: "admin",
            contestantDOB: "01-01-01",
            contestantfaculty: "Natural Science",
            contestantemail: "admin@nas.com",
            contestantlevel: "final",
            contestantphone:"07025488825",
            

    })
    const newPatient = await registerUser.save()
    console.log(newPatient)

    res.send(newPatient)
    

    
}catch(error){
    console.log(error)
    res.status(400).json({message:"Email already exist"});}
})


router.post("/changepassword", async (req, res)=>{
    console.log("what the fuck!")
    try  {const userPass = await User.findOne({email:req.body.email})
            console.log("current password")
            console.log(userPass.pwd)
            console.log("old password")
            console.log(req.body.oldPassword)
        if (userPass.pwd == req.body.oldPassword){
                const userChange = await User.updateOne({email:req.body.email}, {pwd:req.body.newPassword})
                console.log(userChange)

                res.status(200).send({msg:"password was changed successfully"})
            
            }else{
                console.log("Ewo")
                res.status(200).send({msg:"Old password is Incorrect"})
            }
        }
    catch(error){
        console.log(error)
        res.status(400).send({error:error})
    }
})

router.post("/register", async (req, res) => {
    console.log(req.body)
    try{
        if (req.body.pwd != req.body.repwd){
            res.status(400).json({message:"passwords do not match"})
        }
        if (req.body.pwd.length < 8){
            res.status(400).json({message:"password must be greater than 8 characters"})
        }

        else{

        const registerUser = new User({
            fname:req.body.fname,
            lname:req.body.lname,
            pwd:req.body.pwd,
            constestantpics: "",
            contestantdept: req.body.contestantdept,
            contestantDOB: req.body.contestantDOB,
            contestantfaculty: req.body.contestantfaculty,
            contestantemail: req.body.contestantemail,
            contestantlevel: req.body.contestantlevel,
            contestantphone:req.body.contestantphone,
            

    })
    const newPatient = await registerUser.save()
    console.log(newPatient)

    res.send(newPatient)
    }

    
}catch(error){
    console.log(error)
    res.status(400).json({message:"Email already exist"});}
    
})
router.get("/seeallusers", async (req, res) =>{
    res.send(await User.find())
})

router.get("/removeallusers", async (req, res) =>{
    res.send(await User.remove())
})
router.post("/signin", async (req, res) => {
    try{
    const signInUser = await User.findOne({
        contestantemail: req.body.email,
        pwd: req.body.pwd
    })

    if (signInUser) {
        res.send({
            _id: signInUser._id,
            fname: signInUser.fname,
            lname:signInUser.lname,
            dob:signInUser.contestantDOB,
            level:signInUser.contestantlevel,
            dept:signInUser.contestantdept,
            faculty:signInUser.contestantfaculty,
            pics:signInUser.constestantpics,
            email: signInUser.contestantemail,
            phone: signInUser.contestantphone,
            isAdmin: signInUser.isAdmin,
            token: getToken(signInUser),
            pwd:signInUser.pwd

        })
        console.log("pics printingf")
        console.log(signInUser.contestantpics)
    }
    else{
        res.status(400).json({message:"invalid email and password"})
    }}
    catch(error){
        res.send(400).json({message:"Login Failed server is down"})
    }

})


router.post("/uploadimage", upload.single("file"), async (req, res)=>{
    console.log(req.body.email)
    const user = await User.updateOne({contestantemail:req.body.email},
                                    {constestantpics:req.file.path})

    // upload(req, res, (err)=>{
    //     if(err){Overflow
    //         console.log(JSON.stringify(err))
    //     }
    //     else{
    //         console.log("file name is "+req.file.filename)
    //     }
    // })
    res.send({userFile:req.file.path, user})
    
})





router.get("/imagess/:id",async (req, res)=>{

    try{
    console.log(req.params.id)
    res.sendFile(__dirname+"/public/"+req.params.id)
    }
    catch(err){
        res.send(err)
    }
}
)

router.get("/*", (req, res)=>{
    res.send("Page does not exist")
})
export default router