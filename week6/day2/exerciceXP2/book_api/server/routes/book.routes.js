const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/books', bookController.getBooks);
router.get('/books/:bookId', bookController.getBook);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);


module.exports = router;
