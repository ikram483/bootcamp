const Post = require('../models/post.model');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await Post.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { rows } = await Post.findById(req.params.id);
    if (!rows[0]) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await Post.create(title, content);
    res.status(201).json(rows[0]);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await Post.update(req.params.id, title, content);
    if (!rows[0]) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Post.delete(req.params.id);
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};
