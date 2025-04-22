const db = require('../config/db');

exports.findAll = () =>
  db.query('SELECT * FROM posts ORDER BY id');

exports.findById = (id) =>
  db.query('SELECT * FROM posts WHERE id = $1', [id]);

exports.create = (title, content) =>
  db.query(
    'INSERT INTO posts(title,content) VALUES($1,$2) RETURNING *',
    [title, content]
  );

exports.update = (id, title, content) =>
  db.query(
    'UPDATE posts SET title=$1, content=$2 WHERE id=$3 RETURNING *',
    [title, content, id]
  );

exports.delete = (id) =>
  db.query('DELETE FROM posts WHERE id=$1', [id]);
