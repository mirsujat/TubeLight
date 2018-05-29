import React from 'react';

import './Backdrop.css';

const backdrop = props => {
	const Style = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

	return <div className={Style.join(' ')} />;
};

export default backdrop;
