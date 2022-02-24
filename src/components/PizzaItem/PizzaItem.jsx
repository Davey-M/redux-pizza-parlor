import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function PizzaItem() {
	const allPizzasReducer = useSelector((store) => store.allPizzasReducer);

	const dispatch = useDispatch();

	// local state
	let [pizzaState, setPizzaState] = useState([]);

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
				console.log(response.data);

				dispatch({
					type: 'GET_PIZZAS',
					payload: response.data,
				});
			})
			.catch((error) => {
				console.log('error in GET', error);
			});
	} // end of getPizza

	// // this function will send payload id for post Reducer
	function postPizza(id) {
		console.log('Pizza...Delivering...');

		dispatch({
			type: 'SET_PIZZAS',
			payload: id,
		});
		console.log(id);
	} // end of postPizza

	// this function will send payload id for delete Reducer
	function deletePizza(id) {
		console.log('Pizza...Delivering...');

		dispatch({
			type: 'DELETE_PIZZAS',
			payload: [id],
		});
		console.log(id);
	} // end of deletePizza

	console.log(allPizzasReducer);
	return (
		<>
			{allPizzasReducer.map((pizza, i) => {
				return (
					<li key={i}>
						{pizza.name} {pizza.description} {pizza.price} {pizza.image_path}
						<button
							onClick={() => {
								postPizza(pizza.id);
							}}
						>
							Add
						</button>
						<button
							onClick={() => {
								postPizza(pizza.id);
							}}
						>
							Remove
						</button>
					</li>
				);
			})}

			<button link to='/CustomerForm'>
				Next
			</button>
		</>
	);
} // end of PizzaItem

export default PizzaItem;

// post : id,quantity in order router
// [{}]
// add onClick when add is pressed
// quantity
// add payload id
// remove payload id
