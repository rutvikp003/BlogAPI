const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
// This code defines a Mongoose schema for a blog post. It includes fields for the title, content, and author of the blog post. The author field references the User model, allowing for a relationship between blog posts and users. The timestamps option automatically adds createdAt and updatedAt fields to the schema.