import React from 'react';

import Wrapper from '../../../hoc/Wrapper';

const orderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li ke={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Wrapper>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Continue to checkout?</p>
		</Wrapper>
	);
};

export default orderSummary;
