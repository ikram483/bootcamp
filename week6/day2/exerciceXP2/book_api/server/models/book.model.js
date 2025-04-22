const pool = require('../config/db');

exports.getAllBooks = async () => {
  const result = await pool.query('SELECT * FROM books');
  return result.rows;
};

exports.getBookById = async (id) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return result.rows[0];
};

exports.createBook = async (book) => {
  const { title, author, published_year } = book;
  const result = await pool.query(
    'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, published_year]
  );
  return result.rows[0];
};
