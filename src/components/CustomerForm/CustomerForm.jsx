import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, HashRouter as Router } from 'react-router-dom';

function CustomerForm() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [zip, setZip] = useState('');
	const [type, setType] = useState('');

	const handleRadio = (event) => {
		setType(event.target.value);
		console.log('Here is the', event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// axios.post('/order',)
		//     .then(response =>{
		//       setName('');
		//       setCity('');
		//       setZip('');
		//       setCity('');
		//       setType('');
		//     }).catch(erro =>{
		//       console.log('Error in POST order');
		//       alert(`Dude you did it wrong 🦷`)
		//     })
		dispatch({
			type: 'SET_CUSTOMER_DATA',
			payload: {
				customer_name: name,
				street_address: address,
				city,
				zip,
				type,
			},
		});
	};

	return (
		<>
			<Router>
				<section>
					<h2>Add Info</h2>
					<form onSubmit={handleSubmit} className='add-info-form'>
						<input
							required
							placeholder='Name'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>

						<input
							required
							placeholder='Address'
							value={address}
							onChange={(event) => setAddress(event.target.value)}
						/>
						<input
							required
							placeholder='City'
							value={city}
							onChange={(event) => setCity(event.target.value)}
						/>
						<input
							required
							placeholder='Zip'
							value={zip}
							onChange={(event) => setZip(event.target.value)}
						/>
						<label>
							<input
								type='radio'
								value='Pickup'
								onChange={handleRadio}
								checked={type === 'Pickup'}
							/>
							Pickup
						</label>
						<label>
							<input
								type='radio'
								value='Delivery'
								onChange={handleRadio}
								checked={type === 'Delivery'}
							/>
							Delivery
						</label>
						{/* <Route path="/checkout" exact> */}

						<button type='submit'>Submit Info</button>

						<Link to='/CustomerCheckout'>
							<button> Next</button>
						</Link>
					</form>
				</section>
			</Router>
		</>
	);
}

export default CustomerForm;
