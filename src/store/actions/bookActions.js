import axios from 'axios';

import { GET_BOOKS, GET_BOOK, BOOKS_LOADING } from './types';

export const getBooks = (term = null) => async (dispatch) => {
  dispatch({ type: BOOKS_LOADING });
  const res = await axios.get(
    `https://comicclan.vett.io/comics${term ? `?q=${term}` : ''}`,
    {
      headers: { Authorization: 'Bearer ComicClanVettIO2019' },
    }
  );
  dispatch({ type: GET_BOOKS, payload: res.data });
};

export const getBook = (id) => async (dispatch) => {
  dispatch({ type: BOOKS_LOADING });
  const res = await axios.get('https://comicclan.vett.io/comics', {
    headers: { Authorization: 'Bearer ComicClanVettIO2019' },
  });
  dispatch({ type: GET_BOOK, payload: { id, data: res.data } });
};
