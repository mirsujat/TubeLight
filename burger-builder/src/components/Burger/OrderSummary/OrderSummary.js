import React from 'react';

import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Wrapper>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancel}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinue}>
				CONTINUE
			</Button>
		</Wrapper>
	);
};

export default orderSummary;
