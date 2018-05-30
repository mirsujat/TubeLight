import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Style from './ContactInfo.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as action from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../utility/utility';

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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: 'Fastest',
				validation: {},
				valid: true
			}
		},
		formIsValid: false
	};

	submitOrderHandler = event => {
		event.preventDefault();

		const formData = {};
		for (let key in this.state.orderForm) {
			// key = name, street, zipCode, country, email, deliveryMethod
			formData[key] = this.state.orderForm[key].value;
		}
		const order = {
			ingredients: this.props.ings,
			price: this.props.price,
			orderData: formData,
			userId: this.props.userId
		};

		this.props.onOrderSubmit(this.props.token, order);
	};

	checkValidity(value, rules) {
		let isValid = true;

		if (!rules) {
			return true;
		}

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
		// This will deep clone orderForm; elementType, elementConfig and  value
		// Here we just want the value property to set up the user input
		const updatedFormElement = updateObject(
			this.state.orderForm[inputIdentifier],
			{
				value: event.target.value,
				valid: checkValidity(
					event.target.value,
					this.state.orderForm[inputIdentifier].validation
				),
				touched: true
			}
		);
		// This will clone; name, street, zipCode, country, email and deliveryMethod
		const updatedOrderForm = updateObject(this.state.orderForm, {
			[inputIdentifier]: updatedFormElement
		});

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}

		this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
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
						touched={formElement.config.touched}
						changed={event => this.inputChangedHandler(event, formElement.id)}
					/>
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid}>
					SUBMIT ORDER
				</Button>
			</form>
		);
		if (this.props.loading) {
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

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrderSubmit: (token, orderData) =>
			dispatch(action.purchaseBurger(token, orderData))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	withErrorHandler(ContactInfo, axios)
);
