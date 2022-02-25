import axios from 'axios';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import './Checkout.css';

import {
	TableContainer,
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Paper,
} from '@mui/material';

function Checkout() {
	const currentOrder = useSelector((store) => store.currentOrder);
	const allPizzasReducer = useSelector((store) => store.allPizzasReducer);

	// ===== POST ======================================== //
	const handleCheckoutClick = () => {
		console.log('in handleCheckoutClick');
		axios
			.post('api/order', currentOrder)
			.then((response) => {
				console.log('in handleCheckoutClick.then', currentOrder);
				// How do I LINK to home page?
			})
			.catch((err) => {
				console.log('in handleCheckoutClick.catch', err);
			});
	};

	// ===== RETURN ======================================= //
	return (
		<>
			<h3>Step 3: Checkout</h3>

			<ul>
				<li>{currentOrder.customer_name}</li>
				<li>{currentOrder.customer_address}</li>
				<li>
					{currentOrder.city}, {currentOrder.zip}
				</li>
			</ul>

			<div>For: {currentOrder.type}</div>

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

			<Link to='/'>
				<button onClick={handleCheckoutClick}> Checkout</button>
			</Link>
		</>
	);
}

export default Checkout;
