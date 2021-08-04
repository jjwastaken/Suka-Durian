const router = require("express").Router();
const pool = require("./db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const validEmail = require("./validEmail");
const authorization = require("./authorization");

// Sign Up

router.post("/users", validEmail, async (req, res) => {
    try {
        // destructure the req.body (name, email, password, mobilenumber)
        const {name, email, password, mobilenumber} = req.body;

        // check if user exist (throw error if exists)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if(user.rows.length !== 0) {
            // 401 is Unauthenticated
            // 403 is Unauthorized
            return res.status(401).send("User already exist");
        }

        // Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // Enter the new user to database
        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password, user_mobilenumber) VALUES ($1, $2, $3, $4) RETURNING *", 
            [name, email, bcryptPassword, mobilenumber]
        );

        //res.json(newUser.rows[0]);

        // Generate JWT token
        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({token})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});



// Login

router.post("/login", validEmail, async(req, res) => {
    try {
        // destructure the req.body
        const {name, email, password, mobilenumber} = req.body;

        // check if user doesn't exist, throw error otherwise
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);
        if(user.rows.length === 0) {
            // 401 is Unauthenticated
            // 403 is Unauthorized
            return res.status(401).json("Password or Email is incorrect");
        }

        // check if incoming password is the same as database password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        if(!validPassword)
        {
            return res.status(401).json("Password or Email is incorrect");
        }

        // give them jwt token
        const token = jwtGenerator(user.rows[0].user_id);

        res.json({token})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});


// Authorization

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;