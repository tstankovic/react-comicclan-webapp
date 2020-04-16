import React from 'react';

import BookItem from './BookItem';

const BookList = ({ books }) => (
  <div className='container-fluid p-0'>
    <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5'>
      {books.map((book, i) => (
        <BookItem key={i} book={book} />
      ))}
    </div>
  </div>
);

export default BookList;
