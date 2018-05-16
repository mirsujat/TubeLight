import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Style from './ContactInfo.css';

class ContactInfo extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	};

	render() {
		return (
			<div className={Style.ContactInfo}>
				<h4>Enter Your Contact Information.</h4>
				<form>
					<input
						className={Style.Input}
						type="text"
						name="name"
						placeholder="Your Name"
					/>
					<input
						className={Style.Input}
						type="email"
						name="email"
						placeholder="Your Email"
					/>
					<input
						className={Style.Input}
						type="text"
						name="street"
						placeholder="Street"
					/>
					<input
						className={Style.Input}
						type="text"
						name="postalCode"
						placeholder="Postal Code"
					/>
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>
		);
	}
}

export default ContactInfo;
