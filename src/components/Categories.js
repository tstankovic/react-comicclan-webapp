import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setCategory } from '../store/actions/filterActions';

const Categories = ({ active }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setCategory(e.target.textContent.toLowerCase()));
  };

  return (
    <CategoriesWrapper>
      <button
        className={`category${active === 'year' ? ' active' : ''}`}
        onClick={handleClick}
      >
        Year
      </button>
      <button
        className={`category${active === 'writer' ? ' active' : ''}`}
        onClick={handleClick}
      >
        Writer
      </button>
      <button
        className={`category${active === 'artist' ? ' active' : ''}`}
        onClick={handleClick}
      >
        Artist
      </button>
      <button
        className={`category${active === 'owner' ? ' active' : ''}`}
        onClick={handleClick}
      >
        Owner
      </button>
      <button
        className={`category${active === 'random' ? ' active' : ''}`}
        onClick={handleClick}
      >
        Random
      </button>
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  margin-top: 1.5rem;

  .category {
    color: #aaa;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.4rem 1.2rem;
    margin-right: 1rem;
    font-weight: bold;
  }

  .category:hover {
    cursor: pointer;
  }

  .active {
    color: white;
    background-color: #f15454;
    border-radius: 19px;
  }
`;

export default Categories;
