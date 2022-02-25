
import { useState } from 'react';
import "./PizzaCard.css";

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import Pizza from './pizza_photo.png'
>>>>>>> master

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

		setPizzaState([
			...pizzaState,
			{ id: pizza.id, quantity: 1, price: pizza.price },
		]);

		setPizzaPrice(pizzaPrice + Number(pizza.price));
	};

	const removePizza = () => {
		setOrder(!order);

		setPizzaState(pizzaState.filter((item) => item.id !== pizza.id));

		setPizzaPrice(pizzaPrice - Number(pizza.price));
	};

	return (
		<>
		

			<li>
			   <img class="picture" src={Pizza}/>
			   <br></br>
				<span id="name">{pizza.name} </span><br></br><br></br><span id="description">{pizza.description}</span> <br></br><br></br><span id="price">${pizza.price} </span>
				<br></br><br></br>
				{!order && <Button
                onClick={addPizza}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                >
                ADD
            </Button>}
				{order && <Button
                onClick={removePizza}
                variant="contained"
                color="secondary"
                size="large"
                 startIcon={<DeleteIcon />}
                >
                DISCARD
            </Button>}
			</li>


		</>
	);
}

export default PizzaCard;


// line 37 {pizza.image_path}