import React from 'react';
import styled from 'styled-components';

import BookList from './BookList';

const CategoryGroup = ({ category, books }) => (
  <CategoryGroupWrapper className='mt-5'>
    {category && <h2 className='category-name'>{category}</h2>}
    <BookList books={books} />
  </CategoryGroupWrapper>
);

const CategoryGroupWrapper = styled.div`
  margin-top: 1.5rem;
  color: #777;

  .category-name {
    color: #aaa;
    font-weight: normal;
  }
`;

export default CategoryGroup;
