import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookItem = ({ book: { name, owner, image } }) => (
  <BookItemWrapper className='col mt-4 p-3'>
    <Link to={`/book/${name.split('#')[1]}`} className='link'>
      <img width='100%' src={image} alt='book' />
      <h4 className='book-name'>{name.split('#')[0]}</h4>
    </Link>
    <p>
      <span className='owned-by'>Owned by</span>{' '}
      <b className='username'>{owner}</b>
    </p>
  </BookItemWrapper>
);

const BookItemWrapper = styled.div`
  .book-name {
    margin-top: 1rem;
    color: #ccc;
  }

  .owned-by {
    color: #999;
  }

  .username {
    color: #ccc;
  }

  .link {
    text-decoration: none;
  }
`;

export default BookItem;
