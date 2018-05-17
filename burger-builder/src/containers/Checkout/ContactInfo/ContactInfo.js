import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Style from './ContactInfo.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactInfo extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	};

	submitOrderHandler = event => {
		event.preventDefault();
		//console.log(this.props.ingredients);
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Mir Sujat',
				address: {
					street: 'Test Street 02',
					zipCode: 6754,
					country: 'Bangladesh'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};

		axios
			.post('/orders.json', order)
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<Input
					inputtype="input"
					type="text"
					name="name"
					placeholder="Your Name"
				/>
				<Input
					inputtype="input"
					type="email"
					name="email"
					placeholder="Your Email"
				/>
				<Input
					inputtype="input"
					type="text"
					name="street"
					placeholder="Street"
				/>
				<Input
					inputtype="input"
					type="text"
					name="postalCode"
					placeholder="Postal Code"
				/>
				<Button btnType="Success" clicked={this.submitOrderHandler}>
					SUBMIT ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className={Style.ContactInfo}>
				<h4>Enter Your Contact Information.</h4>
				{form}
			</div>
		);
	}
}

export default ContactInfo;
