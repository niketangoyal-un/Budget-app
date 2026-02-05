const express=require("express")
const {signup,login,logout}=require("../controllers/userControllers.js")

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

//logout
router.post('/logout',logout)

module.exports =router;

