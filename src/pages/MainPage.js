import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import CategoryGroup from '../components/Book/CategoryGroup';
import { getBooks } from '../store/actions/bookActions';

const MainPage = () => {
  const { books, loading } = useSelector((state) => state.book);
  const { activeCategory } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const renderCategoryGroups = () => {
    if (activeCategory === 'random') {
      return <CategoryGroup category={null} books={books} />;
    }

    const categoryGroups = {};
    books.forEach((book) => {
      if (!categoryGroups[book[activeCategory]]) {
        categoryGroups[book[activeCategory]] = [book];
      } else {
        categoryGroups[book[activeCategory]].push(book);
      }
    });

    const content = [];
    for (const category in categoryGroups) {
      content.push(
        <CategoryGroup
          key={category}
          category={category}
          books={categoryGroups[category]}
        />
      );
    }

    // sort desc if category is 'year', asc otherwise
    return content.sort((a, b) =>
      activeCategory === 'year'
        ? ('' + b.key).localeCompare(a.key)
        : ('' + a.key).localeCompare(b.key)
    );
  };

  return (
    <MainPageWrapper>
      <SearchBar />
      <Categories active={activeCategory} />
      {!loading ? (
        renderCategoryGroups()
      ) : (
        <div className='loader'>Loading...</div>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  color: #ccc;
  padding: 1.5rem 1rem;
`;

export default MainPage;
