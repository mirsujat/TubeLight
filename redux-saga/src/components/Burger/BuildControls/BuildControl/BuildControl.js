import React from 'react';

import Style from './BuildControl.css';

const buildControl = props => (
	<div className={Style.BuildControl}>
		<div className={Style.Label}>{props.label}</div>

		<button
			className={Style.Less}
			onClick={props.remove}
			disabled={props.disabled}
		>
			Less
		</button>
		<button className={Style.More} onClick={props.add}>
			More
		</button>
	</div>
);

export default buildControl;
