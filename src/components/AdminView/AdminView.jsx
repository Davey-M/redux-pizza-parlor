import { useState } from 'react';

function AdminView() {
	const [orders, setOrders] = useState([]);

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
