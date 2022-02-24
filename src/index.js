import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Reducer, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const currentOrder = (state = {
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    type: '',
    total: '',
    pizzas: [],
}, action) => {

    if (action.type === 'SET_CUSTOMER_DATA') {

        const { customer_name, street_address, city, zip, type } = action.payload;

        return {
            ...currentOrder,
            customer_name: customer_name,
            street_address: street_address
        }
    }

    return state;
}

ReactDOM.render(<App />, document.getElementById('root'));
