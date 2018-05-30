import React from 'react';

import Style from './Button.css';

const button = props => (
	<button
		disabled={props.disabled}
		className={[Style.Button, Style[props.btnType]].join(' ')}
		onClick={props.clicked}>
		{props.children}
	</button>
);

export default button;
