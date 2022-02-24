import { useState } from 'react';

function PizzaCard({ pizza, setPizzaState, pizzaState }) {
	const [order, setOrder] = useState(false);

	const addPizza = () => {
		setOrder(!order);

		setPizzaState([...pizzaState, { id: pizza.id, quantity: 1 }]);
	};

	const removePizza = () => {
		setOrder(!order);

		setPizzaState(pizzaState.filter((item) => item.id !== pizza.id));
	};

	return (
		<li>
			{pizza.name} {pizza.description} {pizza.price} {pizza.image_path}
			{!order && <button onClick={addPizza}>Add</button>}
			{order && <button onClick={removePizza}>Remove</button>}
		</li>
	);
}

export default PizzaCard;
