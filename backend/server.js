// Bring in express // 
import express from "express"; 

// Bring in colors //
import colors from "colors"; 

// Bring in dotenv //
import dotenv from "dotenv"; 
// use dotenv file //
dotenv.config();

// Use dotenv file : This approach is not supported by using ES6 Module//
/* Note: config.env is in a different folder named config */
// dotenv.config({path: "./config/config.env"}); 

// Bring in Morgan Middleware // 
import morgan from "morgan"; 

// Bring in Bootcamp Route // 
import bootcampRoute from "./routes/bootcamps.js";

// Bring in Logger Middleware // 
// import logger from "./middleware/logger.js";

// Bring in connectDB // 
import connectDB from "./config/db.js";

// Initialize express app //
const app = express();   

// Use Logger Middleware //
// app.use(logger);

// Dev Logging Middleware // 
// @desc Run only in development environment//
 if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
 }


 // Connect to database //
connectDB();

           // Route //   
app.get("/", (req, res) => {
      res.send("Bootcamp HomePage");
         })

    // Mount Bootcamps Api EndPoint //
app.use("/api/v1/bootcamps", bootcampRoute)




// Set port //
const PORT = process.env.PORT || 8500

// Start server //
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`.yellow.underline);
});