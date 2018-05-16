import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Style from './CheckoutSummary.css';

const CheckoutSummary = props => {
	return (
		<div className={Style.CheckoutSummary}>
			<h1>Here is your delicious burger!!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.checkoutCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.checkoutContinued}>
				CONTINUE
			</Button>
		</div>
	);
};

export default CheckoutSummary;
