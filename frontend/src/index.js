import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import Cookie from 'js-cookie';

import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import allReducer from './reducers';
import thunk from 'redux-thunk'

const userInfo = Cookie.getJSON("userInfo") || null
console.log(userInfo)
const InnitialState = {sign:{},loggedIn:{userInfo}}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducer, InnitialState, composeEnhancer(applyMiddleware(thunk)))



ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>, document.getElementById('root')
)

serviceWorker.unregister();
