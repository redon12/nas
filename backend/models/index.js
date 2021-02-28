import mongoose, { mongo } from 'mongoose';


const newSchema = new mongoose.Schema({
        fname:{type:String},
        lname:{type:String},
        constestantpics: {type:String},
        contestantDOB:{type: String},
        isAdmin:{type:String, default:false},
        contestantfaculty: {type:String},
        contestantdept: {type:String},
        contestantlevel: {type:String},
        contestantphone:{type:String},
        contestantemail:{type:String, unique:true},
        pwd:{type:String},
        dates:{type:Date},
})

const paymentSchema = new mongoose.Schema({
        fullname:{type:String},
        phone:{type:String},
        votePrice:{type:String},
        email:{type:String},
        noVotes:{type:Array},
        alertInfo:{type: String},
        cEmail:{type: String},
        uniq:{type:String},
        authorized:{type:Boolean, default:false}
        
})
const regContySchema = new mongoose.Schema({
        fname:{type:String},
        lname:{type:String},
        contestantuname:{type:String},
        constestantpics: {type:String},
        contestantdept: {type:String},
        contestantDOB:{type: String},
        contestantfaculty: {type:String},
        contestantemail: {type:String},
        contestantphone:{type:String},
        contestantvote:{type:String},
        contestantlevel:{type:String},
        vote:{type:String, default:0},
        contestIn: {type:String},
        


})

const newContestSchema = new mongoose.Schema({
        cname:{type:String},
        cimage:{type:String},
        cdeadline:{type:String},
        cvoteprice:{type:String},
        cuniquename: {type:String}
})




const blogSchema = new mongoose.Schema({
    title:{type:String},
    posts:{type:String},
    images:[{type:String}]

})
export const newPost = mongoose.model("allposts", blogSchema)
export const newContest = mongoose.model("contests", newContestSchema)
export const regConty = mongoose.model("contys", regContySchema)
export const paymentDetails = mongoose.model("payments", paymentSchema)


const newUser = mongoose.model("contestants", newSchema)



export default newUser;