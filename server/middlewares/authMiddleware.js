import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const checkIsUserAuthenticate = async( req, res, next) => {
    
    let token;
    
    const { authorization } = req.headers;

        console.log(authorization);

    // console.log(req.headers);

    if(authorization && authorization.startsWith("Bearer")){
        try{
            token = authorization.split(" ")[1];

            const userID = jwt.verify(token, "pleaseSubscribe", (err, decoded) => {
                
                if(err){
                    return res.status(401).json({message: `unAuthorizes User`});
                }
                req.user = decoded.user;

                next();

            });
        }catch(error){ 
            return res.status(401).json({message: error.message});
        }
    }else{
        return res.status(401).json({message: `unAuthorizes User`});
    }
}

export default checkIsUserAuthenticate


