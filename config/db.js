const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;
// This code establishes a connection to a MongoDB database using Mongoose. It defines an asynchronous function `connectDB` that attempts to connect to the database using the URI stored in the environment variable `MONGO_URI`. If the connection is successful, it logs a success message; if it fails, it logs the error and exits the process with a failure code.