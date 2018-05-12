import React from 'react';

import Style from './Modal.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
	<Wrapper>
		<Backdrop show={props.show} clicked={props.modalClosed} />
		<div
			className={Style.Modal}
			style={{
				transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.show ? '1' : '0'
			}}
		>
			{props.children}
		</div>
	</Wrapper>
);

export default modal;
