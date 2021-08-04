const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // can do query
const authorization = require("./authorization");

//middleware
app.use(cors());
app.use(express.json());

// ROUTES //

app.use("/auth", require("./jwtAuth"));

app.get("/home", authorization, async(req, res) => {
    try {
        // req.user has payload
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
})
// create a profile
// app.post("/profiles", async(req,res) => {
//     try {
//         const profile = req.body;
//         const newProfile = await pool.query(
//             "INSERT INTO profiles (name, email, password, mobilenumber) VALUES($1, $2, $3, $4) RETURNING *"
//             , [profile.name, profile.email, profile.password, profile.mobilenumber]);
//         res.json(newProfile.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// // get all profiles
// app.get("/profiles", async(req,res) => {
//     try {
//         const allProfiles = await pool.query("SELECT * FROM profiles");
//         res.json(allProfiles.rows);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// // get a profile
// app.get("/profiles/:id", async(req,res) => {
//     try {
//         //console.log(req.params);
//         const {id} = req.params;
//         const profile = await pool.query("SELECT * FROM profiles WHERE pid = $1", [id]);
//         res.json(profile.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// // update a profile
// app.put("/profiles/:id", async(req,res) => {
//     try {
//         const {id} = req.params;
//         const profile = req.body;
//         const updateTodo = await pool.query(
//             "UPDATE profiles SET name = $1, email = $2, password = $3, mobilenumber = $4 WHERE pid = $5", 
//             [profile.name, profile.email, profile.password, profile.mobilenumber, id])
//         res.json("Profile was updated");
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// // delete a profile
// app.delete("/profiles/:id", async(req,res) => {
//     try {
//         const {id} = req.params;
//         const deleteProfile = await pool.query("DELETE FROM profiles WHERE pid = $1", [id]);
//         res.json("Profile was deleted");
//     } catch (error) {
//         console.log(error.message);
//     }
// })

app.listen(5000, () => {
    console.log("Server Started!!!");
})