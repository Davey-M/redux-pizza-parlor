import React from 'react';
import axios from 'axios';
import './App.css';

import AdminView from '../AdminView/AdminView';

function App() {
	function getPizza() {
		console.log('Loading Pizzas...');
		axios({
			method: 'GET',
			url: '/api/pizza',
		})
			.then((response) => {
				console.log(response.data);

				dispatchEvent({
					type: 'GET_PIZZAS',
					payload: response.data,
				});
			})
			.catch((error) => {
				console.log('error in GET', error);
			});
	} // end of getPizza

	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Prime Pizza</h1>
			</header>

			<AdminView />

			{/* <img src='images/pizza_photo.png' /> */}
			{/* <p>Pizza is great.</p> */}
		</div>
	);
}

export default App;

// axios get
// dispatch
// index will have a reduce and set it in store.
