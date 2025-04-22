const Book = require('../models/book.model');
const pool = require('../config/db');


exports.getBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, published_year } = req.body;

  try {
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *',
      [title, author, published_year, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating book' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting book' });
  }
};

