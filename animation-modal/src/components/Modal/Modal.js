import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const TIME = {
	enter: 400,
	exit: 2000
};

const modal = props => {
	return (
		<Transition in={props.show} mountOnEnter unmountOnExit timeout={TIME}>
			{state => {
				const Style = [
					'Modal',
					state === 'entering'
						? 'ModalOpen'
						: state === 'exiting' ? 'ModalClosed' : null
				];

				return (
					<div className={Style.join(' ')}>
						<h1>A Modal</h1>
						<button className="Button" onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default modal;
