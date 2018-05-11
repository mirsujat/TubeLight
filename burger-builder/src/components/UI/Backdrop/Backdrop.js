import React from 'react';

import Style from './Backdrop.css';

const backdrop = props =>
	props.show ? (
		<div className={Style.Backdrop} onClick={props.clicked} />
	) : null;

export default backdrop;
