const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user.userId // ✅ only save ObjectId string
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'name email');
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author', 'name email');
  if (!blog) return res.status(404).json({ msg: 'Blog not found' });
  res.json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: 'Not found' });
  if (blog.author.toString() !== req.user) return res.status(403).json({ msg: 'Unauthorized' });

  const { title, content } = req.body;
  blog.title = title || blog.title;
  blog.content = content || blog.content;
  await blog.save();
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: 'Not found' });
  if (blog.author.toString() !== req.user) return res.status(403).json({ msg: 'Unauthorized' });

  await blog.remove();
  res.json({ msg: 'Blog deleted' });
};
