import React from 'react';
import './App.css';
import {
	HashRouter as Router,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
// import CustomerForm from '../CustomerForm/CustomerForm';

import PizzaItem from '../PizzaItem/PizzaItem';
import CustomerForm from '../CustomerForm/CustomerForm';
import AdminView from '../AdminView/AdminView';
import Checkout from '../Checkout/Checkout';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	return (
		<Router>
			<div
				className='App'
				style={{
					display: 'grid',
					gridTemplateRows: 'max-content 1fr max-content',
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
				<Footer />
			</div>
		</Router>
	);
}

export default App;

// axios get
// dispatch
// index will have a reduce and set it in store.

function Footer() {
	const history = useHistory();
	const dispatch = useDispatch();
	// const [selectedLabel, setLabel] = useState(0);

	const selectedLabel = useSelector((store) => store.linkState);

	return (
		<footer
			style={{
				width: '80%',
				margin: '1rem auto',
			}}
		>
			<Paper>
				<BottomNavigation
					showLabels
					value={selectedLabel}
					onChange={(event, newValue) => {
						// setLabel(newValue);

						dispatch({
							type: 'SET_LINK',
							payload: newValue,
						});

						let route;
						switch (newValue) {
							case 0:
								route = '/';
								break;
							case 1:
								route = '/CustomerForm';
								break;
							case 2:
								route = '/CustomerCheckout';
								break;
							default:
								route = '/';
								break;
						}

						history.push(route);
					}}
				>
					<BottomNavigationAction label='Select Pizzas' />
					<BottomNavigationAction label='Customer Info' />
					<BottomNavigationAction label='Checkout' />
				</BottomNavigation>
			</Paper>
		</footer>
	);
}
