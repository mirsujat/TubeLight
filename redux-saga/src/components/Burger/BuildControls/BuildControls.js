import React from 'react';

import Style from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => (
	<div className={Style.BuildControls}>
		<p>
			Price: <strong>{props.price.toFixed(2)}</strong>
		</p>

		{controls.map(ctrl => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				add={() => props.addIngredient(ctrl.type)}
				remove={() => props.removeIngredient(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}

		<button
			className={Style.OrderButton}
			disabled={!props.purchaseable}
			onClick={props.order}>
			{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
		</button>
	</div>
);

export default buildControls;
