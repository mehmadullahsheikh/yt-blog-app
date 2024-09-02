import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
 const createTokenandSaveCookie = async (userId,res)=>{
    const token = jwt.sign(
        {userId},
        process.env.JWT_TOKEN,{
            expiresIn: '1h'
        });
    res.cookie("jwt",token,{httpOnly:true,secure:true,sameSite:"strict"})
    await User.findByIdAndUpdate(userId,{token});
   return token;
 }

 export default createTokenandSaveCookie;