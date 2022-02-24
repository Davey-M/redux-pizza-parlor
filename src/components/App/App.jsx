import React from 'react';
import './App.css';
import PizzaItem from '../PizzaItem/PizzaItem';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Prime Pizza</h1>
			</header>

			<img src='images/pizza_photo.png' />
			<p>Pizza is great.</p>
			<PizzaItem />
		</div>
	);
}

export default App;

// axios get
// dispatch
// index will have a reduce and set it in store.
