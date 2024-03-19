require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();

const PORT = process.env.PORT;
//db connection
require("./models/dbconfig").dbconnection();

//routes 
 const userRouter =  require("./routes/userRoutes");
//logger 
const logger = require("morgan");
app.use(logger("tiny"));

 //body pasrser
 app.use(express.json());
 app.use(express.urlencoded({ extended: true}));

 app.use("/api/user", userRouter);

app.all("*",(req, res, next) => {
    res.status(404).json({sucess: false, message:`${req.url} route not found` });
});
//server

app.listen(PORT , ()=>{
console.log(`The server is running on port ${PORT}`);

});