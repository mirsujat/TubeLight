import React from 'react';

import Style from './Input.css';

const input = props => {
	let inputElement = null;

	switch (props.inputtype) {
		case 'input':
			inputElement = <input className={Style.InputElement} {...props} />;
			break;
		case 'textarea':
			inputElement = <textarea {...props} />;
			break;

		default:
			inputElement = <input className={Style.InputElement} {...props} />;
	}

	return (
		<div className={Style.Input}>
			<label className={Style.Label}>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default input;
