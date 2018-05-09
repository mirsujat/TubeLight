import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
	render() {
		return (
			<Wrapper>
				<Burger />
				<div>Burger Controllers</div>
			</Wrapper>
		);
	}
}

export default BurgerBuilder;
