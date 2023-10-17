const express = require('express')
const app = express();
const dotenv = require("dotenv");
const connectedDB = require("./config/db");
const errorHandler = require("./middleware/error");

app.use(express.json())
const userRoutes = require("./routes/UserRoute");
// load env files
dotenv.config({ path: "./.env" });

// connect to mogoDb
connectedDB();


app.use('/api/v1/auth', userRoutes)
app.use(errorHandler);



const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})