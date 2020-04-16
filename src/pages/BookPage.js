import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BookDetails from '../components/Book/BookDetails';
import CategoryGroup from '../components/Book/CategoryGroup';
import { getBook } from '../store/actions/bookActions';

const BookPage = (props) => {
  const dispatch = useDispatch();
  const { book, books, loading } = useSelector((state) => state.book);

  const id = props.match.params.id;

  const randomBooks = [...Array(5)].map(
    (_) => books[Math.floor(Math.random() * books.length)]
  );

  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <BookPageWrapper>
      <div>
        <span>🡠</span>{' '}
        <Link to='/'>
          <h5>Back to collection</h5>
        </Link>
      </div>
      <BookDetails book={book} />
      <hr className='mt-5' color='#777' />
      {randomBooks[0] && (
        <CategoryGroup category='Other random books' books={randomBooks} />
      )}
    </BookPageWrapper>
  );
};

const BookPageWrapper = styled.main`
  color: #ccc;
  padding: 1.5rem 1rem;

  span,
  a {
    color: #777;
  }

  h5 {
    display: inline-block;
    text-decoration: underline;
  }
`;

export default BookPage;
