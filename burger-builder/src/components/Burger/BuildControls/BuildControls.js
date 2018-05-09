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
		{controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)}
	</div>
);

export default buildControls;
