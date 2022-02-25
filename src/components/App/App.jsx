import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
// import CustomerForm from '../CustomerForm/CustomerForm';

import PizzaItem from '../PizzaItem/PizzaItem';
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminView from '../AdminView/AdminView';
import Checkout from '../Checkout/Checkout';

function App() {
	return (
		<Router>
			<div
				className='App'
				style={{
					display: 'grid',
					gridTemplateRows: 'max-content 1fr',
					height: '100vh',
				}}
			>
				<header className='App-header'>
					<h1 className='App-title'>Prime Pizza</h1>
				</header>
				{/* <img src='images/pizza_photo.png' />
				<p>Pizza is great.</p> */}
				<main>
					<Route path='/' exact>
						<PizzaItem />
					</Route>
					<Route path='/CustomerForm' exact>
						<CustomerForm />
					</Route>
					<Route path='/CustomerCheckout' exact>
						<Checkout />
					</Route>
					<Route path='/admin' exact>
						<AdminView />
					</Route>
				</main>
			</div>
		</Router>
	);
}

export default App;

// axios get
// dispatch
// index will have a reduce and set it in store.
