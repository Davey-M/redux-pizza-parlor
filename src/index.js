import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// Pizza reducer for GET from App.jsx
const allPizzasReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZAS') {
        return action.payload // returns only what is currently updated
    }
    return state
}; // end of allPizzasReducer

const storeInstance = createStore(
    combineReducers({
        allPizzasReducer,
    }),
    applyMiddleware(logger),

); // end of storeInstance





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
