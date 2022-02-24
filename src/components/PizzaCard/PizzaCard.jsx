import { useState } from 'react';

function PizzaCard({
	pizza,
	setPizzaState,
	pizzaState,
	setPizzaPrice,
	pizzaPrice,
}) {
	const [order, setOrder] = useState(false);

	const addPizza = () => {
		setOrder(!order);

		setPizzaState([...pizzaState, { id: pizza.id, quantity: 1 }]);

		setPizzaPrice(pizzaPrice + Number(pizza.price));
	};

	const removePizza = () => {
		setOrder(!order);

		setPizzaState(pizzaState.filter((item) => item.id !== pizza.id));

		setPizzaPrice(pizzaPrice - Number(pizza.price));
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
