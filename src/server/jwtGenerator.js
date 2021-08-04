const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id) {
    const payload = {
        user: user_id
    }
    // weird that process.env.jwtSecret has to concatenate with ""
    return jwt.sign(payload, "" + process.env.jwtSecret, {expiresIn: "1hr"}) // by seconds or can do "1hr"
}

module.exports = jwtGenerator;