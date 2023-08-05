class AuthController
{
    static userRagistration = async(req, res) => {
        res.send("User registration");
    };
    static userLogin = (req, res) => {
        res.send("User login");
    }
}

export default AuthController;