                   /* Logger Middleware */

// Logger Middleware //
// @desc  Logs request to the console || Work like Morgan Middleware(3rd Party Middleware) //
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next();
}  


export default logger;
