import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

import { Button, TextField } from '@mui/material';

function CustomerForm() {
	const history = useHistory();

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

		dispatch({
			type: 'SET_LINK',
			payload: 2,
		});
		history.push('/CustomerCheckout');
	};

	return (
		<>
			<Router>
				<section>
					<h2>Add Info</h2>
					<form onSubmit={handleSubmit} className='add-info-form'>
						<TextField
							style={{
								minWidth: '40%',
							}}
							required
							label='Name'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>

						<div className='break'></div>

						<TextField
							style={{
								minWidth: '40%',
							}}
							required
							label='Address'
							value={address}
							onChange={(event) => setAddress(event.target.value)}
						/>

						<div className='break'></div>

						<TextField
							style={{
								minWidth: 'calc(20% - .5rem)',
							}}
							required
							label='City'
							value={city}
							onChange={(event) => setCity(event.target.value)}
						/>

						<div className='widthBreak'></div>

						<TextField
							style={{
								minWidth: 'calc(20% - .5rem)',
							}}
							required
							label='Zip'
							value={zip}
							onChange={(event) => setZip(event.target.value)}
						/>

						<div className='break'></div>

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

						{/* <button type='submit'>Submit Info</button> */}

						<div className='break'></div>

						<Button variant='contained' type='submit'>
							Next
						</Button>
					</form>
				</section>
			</Router>
		</>
	);
}

export default CustomerForm;
