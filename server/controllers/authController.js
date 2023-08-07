import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
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
    static userLogin = (req, res) => {
        res.send("User login");
    }
}

export default AuthController;