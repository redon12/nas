import jwt from 'jsonwebtoken';
const getToken = (user) =>{
    return jwt.sign({
        _id:user._id,
        fname:user.fname,
        email:user.email,
        isAdmin:user.isAdmin
    }, "theguy", {
        expiresIn:"48h"
    })
}

export {getToken}