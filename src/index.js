import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const currentOrder = (state = {
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    type: '',
    total: 0,
    pizzas: [],
}, action) => {

    if (action.type === 'SET_CUSTOMER_DATA') {

        const { customer_name, street_address, city, zip, type } = action.payload;

        return {
            ...state,
            customer_name: customer_name,
            street_address: street_address,
            city: city,
            zip: zip,
            type: type,
        }
    }

    if (action.type === 'SET_PIZZAS') {

        const { total, pizzas } = action.payload;

        return {
            ...state,
            pizzas: pizzas,
            total: Number(total),
        }
    }

    return state;
}
// Pizza reducer for GET from App.jsx
const allPizzasReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZAS') {
        return action.payload // returns only what is currently updated
    }
    return state
}; // end of allPizzasReducer

const storeData = createStore(
    combineReducers({
        currentOrder,
        allPizzasReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
