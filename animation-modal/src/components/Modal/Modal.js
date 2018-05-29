import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = props => {
	return (
		<Transition in={props.show} mountOnEnter unmountOnExit timeout={300}>
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
