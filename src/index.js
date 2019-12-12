import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/loginReducer';

const store = createStore(loginReducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root')
  );

