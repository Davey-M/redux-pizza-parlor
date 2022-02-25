import axios from 'axios';
import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './Checkout.css';

function Checkout() {

    const currentOrder = useSelector(store => store.currentOrder);
    const allPizzasReducer = useSelector(store => store.allPizzasReducer);

    // ===== POST ======================================== //
    const handleCheckoutClick = () => {
        console.log('in handleCheckoutClick');
        axios.post('api/order', currentOrder)
            .then((response) => {
                console.log('in handleCheckoutClick.then', currentOrder);
                // How do I LINK to home page?
            }).catch((err) => {
                console.log('in handleCheckoutClick.catch', err);
            })
    }


    // ===== RETURN ======================================= //
    return (
        <>
            <h3>Step 3: Checkout</h3>

            <ul>
                <li>{currentOrder.customer_name}</li>
                <li>{currentOrder.customer_address}</li>
                <li>{currentOrder.city}, {currentOrder.zip}</li>
            </ul>

            <div>For: {currentOrder.type}</div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrder.pizzas.map((pizza, i) => {
                        return <tr key={i}>
                            <td>{allPizzasReducer.filter(item => item.id === pizza.id)[0].name}</td>
                            <td>{pizza.quantity}</td>
                            <td>{pizza.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>

            <h3>Total: {currentOrder.total}</h3>

            {/* Handle Checkout & Link to back to Select Pizzas */}

            <Link to='/'>
                <button onClick={handleCheckoutClick}> Checkout</button>
            </Link>
        </>
    )
}

export default Checkout;