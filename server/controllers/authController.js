import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
class AuthController
{
    static userRagistration = async(req, res) => {
        const {username, email, password } = req.body;

        try{
            if(username && email && password){
                const isUser = await authModel.findOne({email: email});
                if(!isUser){
                    // PssWord hasing
                    const genSalt = await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password, genSalt);

                    // Save a User 
                    const newUser = authModel({
                        username,
                        email,
                        password: hashedPassword
                    });
                    const savedUser = await newUser.save();
                    if(savedUser){
                        return res.status(200).json({message: 'User saved' }); 
                    }

                }else{
                    return res.status(400).json({message: 'Email already registered' }); 
                }

            }
            else{
                return res.status(400).json({message: 'all fields are required' });  
            }
        }catch(error){
            return res.status(400).json({message: error.message });
        }
        
    };
    static userLogin = async(req, res) => {
        const {email, password} = req.body;
        try{
            if(email && password){
                const isEmail = await authModel.findOne({email: email});
                if(isEmail){

                    if(isEmail.email === email && bcryptjs.compare(password, isEmail.password)){
                        // genarate token

                        const token = jwt.sign({userID: isEmail._id}, "pleaseSubscribe", {
                            expiresIn: "1d",
                        });

                        return res.status(200).json({
                            message: "Login Successfully",
                            token,
                            name: isEmail.name,
                        })

                    }else{
                        return res.status(400).json({message: 'Wrong credentials' }); 
                    }

                }else{
                    return res.status(400).json({message: `Email is not registered ${isEmail}` }); 
                }

            }
            else{
                return res.status(400).json({message: `all fields are required` });  
            }
        }catch(error){
            return res.status(400).json({message: error.message });
        }

    }
}

export default AuthController;