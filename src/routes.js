const {
  addBooksShelfHandler,
  getAllBooksShelfHandler,
  getBooksShelfByIdHandler,
  updateBooksShelfById,
  deleteBooksShelfByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksShelfHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksShelfHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksShelfByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBooksShelfById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksShelfByIdHandler,
  },
];

module.exports = routes;
