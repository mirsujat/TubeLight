import React, { Component } from 'react';

const asyncComponent = importComponent => {
	return class extends Component {
		state = {
			component: null
		};

		componentDidMount() {
			importComponent().then(cmp => {
				this.setState({ component: cmp.default });
			});
		}

		render() {
			const COMP = this.state.component;

			return COMP ? <COMP {...this.props} /> : null;
		}
	};
};

export default asyncComponent;
