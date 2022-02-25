import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import icon from './nav3.svg';

import {
	HashRouter as Router,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
// import './Checkout.css';

import {
	TableContainer,
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Paper,
	Button,
} from '@mui/material';

function Checkout() {
	const currentOrder = useSelector((store) => store.currentOrder);
	const allPizzasReducer = useSelector((store) => store.allPizzasReducer);
	const history = useHistory();
	const dispatch = useDispatch();

	// ===== POST ======================================== //
	const handleCheckoutClick = () => {
		console.log('in handleCheckoutClick');
		axios
			.post('api/order', currentOrder)
			.then((response) => {
				console.log('in handleCheckoutClick.then', currentOrder);
				// How do I LINK to home page?
				history.push('/');
			})
			.catch((err) => {
				console.log('in handleCheckoutClick.catch', err);
			});
	};

	// ===== RETURN ======================================= //
	return (
		<>
			<h1>Checkout</h1>

			{/* <ul>
				<li>{currentOrder.customer_name}</li>
				<li>{currentOrder.customer_address}</li>
				<li>
					{currentOrder.city}, {currentOrder.zip}
				</li>
			</ul> */}

			<Paper
				style={{
					maxWidth: 'max-content',
					padding: '1rem',
					margin: '1rem 5%',
					textAlign: 'left',
				}}
			>
				<div>{currentOrder.customer_name}</div>
				<div>{currentOrder.customer_address}</div>
				<div>
					{currentOrder.city}, {currentOrder.zip}
				</div>
				<div>Type: {currentOrder.type}</div>
			</Paper>

			{/* <div>For: {currentOrder.type}</div> */}

			<div
				style={{
					maxWidth: '90%',
					margin: 'auto',
				}}
			>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Cost</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{currentOrder.pizzas.map((pizza, i) => {
								return (
									<TableRow key={i}>
										<TableCell>
											{
												allPizzasReducer.filter(
													(item) => item.id === pizza.id,
												)[0].name
											}
										</TableCell>
										<TableCell>{pizza.quantity}</TableCell>
										<TableCell>{pizza.price}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</div>

			<h3>Total: {currentOrder.total}</h3>

			{/* Handle Checkout & Link to back to Select Pizzas */}

			<Button onClick={handleCheckoutClick} variant='contained'>
				Checkout
			</Button>
		</>
	);
}

export default Checkout;
