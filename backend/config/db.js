const mongoose = require("mongoose");
// const dotenv = require('dotenv')

// dotenv.config({path: './.env'})

const connectedDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
  
  });
  console.log(`mongoDB connect: ${conn.connection.host}`);
};

module.exports = connectedDB;
