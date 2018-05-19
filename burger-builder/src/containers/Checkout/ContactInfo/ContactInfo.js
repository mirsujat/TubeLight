import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Style from './ContactInfo.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactInfo extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street Address'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: false
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-mail'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: ''
			}
		},
		loading: false
	};

	submitOrderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let key in this.state.orderForm) {
			// key = name, street, zipCode, country, email, deliveryMethod
			formData[key] = this.state.orderForm[key].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
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

	checkValidity(value, rules) {
		let isValid = true;

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}
		return isValid;
	}

	inputChangedHandler = (event, inputIdentifier) => {
		// This will clone; name, street, zipCode, country, email and deliveryMethod
		const updatedOrderForm = {
			...this.state.orderForm
		};
		// This will deep clone orderForm; elementType, elementConfig and  value
		// Here we just want the value property to set up the user input
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		this.setState({ orderForm: updatedOrderForm });
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			// key is name, street, zipCode, country, email,  and deliveryMethod
			// formElementsArray = [ {id: name, config: {elementType: .., elementConfig: ...}} and so on..]
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form onSubmit={this.submitOrderHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						changed={event => this.inputChangedHandler(event, formElement.id)}
					/>
				))}
				<Button btnType="Success">SUBMIT ORDER</Button>
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
