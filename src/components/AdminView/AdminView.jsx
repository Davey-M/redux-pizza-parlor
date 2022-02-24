import axios from 'axios';
import { useState } from 'react';

function AdminView() {
	const [orders, setOrders] = useState([]);

	axios
		.get('/orders')
		.then((response) => {
			setOrders(response.data);
		})
		.catch((err) => {
			console.error('Error getting orders', err);
		});

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
				<tbody></tbody>
			</table>
		</div>
	);
}

export default AdminView;
