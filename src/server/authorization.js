const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");
        
        // check if there's token
        if(!jwtToken) // if no token
        {
            return res.status(403).json("Not Authorize");
        }

        // check if token is valid, not fake
        const payload = jwt.verify(jwtToken, "" + process.env.jwtSecret);
        req.user = payload.user;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorize");
    }
}