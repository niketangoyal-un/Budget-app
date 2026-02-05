const express = require('express')
const app = express()
const env=require("dotenv")
const connectDB=require("./config/db")
const users=require('./routes/userRoutes')
const auth = require("./middleware/auth");
const cookieParser = require("cookie-parser");
const error=require('./middleware/error.js')

app.use(express.json());     
app.use(cookieParser());      


env.config({path:'./config/.env'})
connectDB()


app.get("/api/profile", auth, (req, res) => {
  res.json({ user: req.user });
});

app.use('/api/users',users);

app.use(error);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
