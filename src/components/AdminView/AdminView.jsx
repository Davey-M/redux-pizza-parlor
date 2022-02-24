import axios from 'axios';
import { useEffect, useState } from 'react';

// mui imports
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	TableContainer,
	Paper,
} from '@mui/material';

function AdminView() {
	const [orders, setOrders] = useState([]);

	const getOrders = () => {
		axios
			.get('/api/order')
			.then((response) => {
				setOrders(response.data);
			})
			.catch((err) => {
				console.error('Error getting orders', err);
			});
	};

	useEffect(() => {
		getOrders();
	}, []);

	console.log(orders);
	return (
		<div className='adminView'>
			<h1>Pizza Orders</h1>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Time</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Cost</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orders.map((order) => {
							const { customer_name, time, type, total, id } = order;
							return (
								<TableRow key={id}>
									<TableCell>{customer_name}</TableCell>
									<TableCell>{time}</TableCell>
									<TableCell>{type}</TableCell>
									<TableCell>{total}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default AdminView;
