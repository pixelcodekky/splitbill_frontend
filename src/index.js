import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import App from './App';
import reducers from './statemgmt/reducers';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

