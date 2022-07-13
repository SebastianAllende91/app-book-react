import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import AppStore from './redux/store';
import MainRoute from './route/MainRoute';

const App = () => {

  return (
    <Provider store={AppStore}>
        <Router>
        <MainRoute />
        </Router>
    </Provider>
  );
}

export default App;
