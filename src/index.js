import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/loginReducer';
import List from './List';


const store = createStore(loginReducer);
function Routes(){
    return (
    <Router>
      <div>
        <Switch>
        
           <Route path="/list/" component={List} />
        </Switch>
      </div>
    </Router>
    )
}

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root')
  );

