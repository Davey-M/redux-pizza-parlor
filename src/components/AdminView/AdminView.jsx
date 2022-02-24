import axios from 'axios';
import { useEffect, useState } from 'react';

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
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Time Order Placed</th>
						<th>Type</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						return (
							<tr>
								<td></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default AdminView;
