const express = require('express');
const {
  createBlog, getBlogs, getBlogById, updateBlog, deleteBlog
} = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', auth, createBlog);
router.get('/:id', getBlogById);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;