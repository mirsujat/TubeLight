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
					onChange={props.changed}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={Style.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;

		case 'select':
			inputElement = (
				<select className={Style.InputElement} value={props.value}>
					{props.elementConfig.options.map(option => (
						<option
							key={option.value}
							value={option.value}
							onChange={props.changed}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;

		default:
			inputElement = (
				<input
					className={Style.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
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
