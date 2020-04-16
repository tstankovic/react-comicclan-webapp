import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import SearchIcon from '../images/Search Icon.png';
import { getBooks } from '../store/actions/bookActions';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(getBooks(searchTerm));
    }
  };

  return (
    <SearchBarWrapper>
      <img height='100%' src={SearchIcon} alt='search' />
      <input
        type='text'
        className='search-input'
        placeholder='Search by book name'
        onKeyPress={handleKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  border: 3px solid #777;
  border-radius: 10px;

  .search-input {
    width: 100%;
    margin-left: 0.5rem;
    background-color: transparent;
    color: #ccc;
    border: none;
    outline: none;
    font-size: 16px;
  }

  .clear {
    color: #777;
  }

  .clear:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default SearchBar;
