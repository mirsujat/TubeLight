import React from 'react';

import Style from './Input.css';

const input = props => {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={Style.InputElement}
					{...props.elementConfig}
					value={props.value}
				/>
			);
			break;
		case 'textarea':
			inputElement = <textarea {...props.elementConfig} value={props.value} />;
			break;

		default:
			inputElement = (
				<input
					className={Style.InputElement}
					{...props.elementConfig}
					value={props.value}
				/>
			);
	}

	return (
		<div className={Style.Input}>
			<label className={Style.Label}>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default input;
