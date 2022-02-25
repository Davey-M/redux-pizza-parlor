import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import PizzaCard from '../PizzaCard/PizzaCard';
import { Button } from '@mui/material';
import './PizzaItem.css';

function PizzaItem() {
	const allPizzasReducer = useSelector((store) => store.allPizzasReducer);

	const dispatch = useDispatch();

	// local state
	const [pizzaState, setPizzaState] = useState([]);
	const [pizzaPrice, setPizzaPrice] = useState(0);

	useEffect(() => {
		console.log('in Effect');
		getPizza();
	}, []);

	// this function will GET pizza from data base and send it to a get reducer for all pizza
	function getPizza() {
		console.log('Loading Pizzas...');
		axios({
			method: 'GET',
			url: '/api/pizza',
		})
			.then((response) => {
				// console.log(response.data);

				dispatch({
					type: 'GET_PIZZAS',
					payload: response.data,
				});
			})
			.catch((error) => {
				console.log('error in GET', error);
			});
	} // end of getPizza

	const setPizzas = () => {
		dispatch({
			type: 'SET_PIZZAS',
			payload: {
				pizzas: pizzaState,
				total: pizzaPrice,
			},
		});
	};

	console.log({ allPizzasReducer });
	console.log({ pizzaState });
	return (
		<Router>
			<div id='name-header'>
				<h1>Pizzallas</h1>
			</div>
			{allPizzasReducer.map((pizza, i) => {
				return (
					<PizzaCard
						key={i}
						pizza={pizza}
						setPizzaState={setPizzaState}
						pizzaState={pizzaState}
						setPizzaPrice={setPizzaPrice}
						pizzaPrice={pizzaPrice}
					/>
				);
			})}
			<div id='Next'>
				<Link to='/CustomerForm'>
					<br></br>
					<Button onClick={setPizzas} variant='contained'>
						Next
					</Button>
				</Link>
			</div>
		</Router>
	);
} // end of PizzaItem

export default PizzaItem;

// post : id,quantity in order router
// [{}]
// add onClick when add is pressed
// quantity
// add payload id
// remove payload id
