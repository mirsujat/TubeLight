import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	state = {
		counter: 0
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case 'inc':
				this.setState(prevState => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case 'dec':
				this.setState(prevState => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case 'add':
				this.setState(prevState => {
					return { counter: prevState.counter + value };
				});
				break;
			case 'sub':
				this.setState(prevState => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.increment} />
				<CounterControl label="Decrement" clicked={this.props.decrement} />
				<CounterControl label="Add 10" clicked={this.props.add} />
				<CounterControl label="Subtract 15" clicked={this.props.subtract} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
		add: () => dispatch({ type: 'ADD', val: 10 }),
		subtract: () => dispatch({ type: 'SUBTRACT', val: 15 })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
