import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/book/:id' component={BookPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
