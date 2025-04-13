const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a user. It includes fields for the user's name, email, and password. The email field is unique, meaning no two users can have the same email address. The schema is then exported as a Mongoose model named 'User', which can be used to interact with the users collection in the MongoDB database.