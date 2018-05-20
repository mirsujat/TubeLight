import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.increment} />
				<CounterControl label="Decrement" clicked={this.props.decrement} />
				<CounterControl label="Add 10" clicked={this.props.add} />
				<CounterControl label="Subtract 15" clicked={this.props.subtract} />
				<hr />
				<button onClick={this.props.storeResult}>Store Result</button>
				<ul>
					{this.props.results.map(result => (
						<li
							key={result.id}
							onClick={() => this.props.deleteResult(result.id)}>
							{result.value}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter,
		results: state.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
		add: () => dispatch({ type: 'ADD', val: 10 }),
		subtract: () => dispatch({ type: 'SUBTRACT', val: 15 }),
		storeResult: () => dispatch({ type: 'STORE_RESULT' }),
		deleteResult: id => dispatch({ type: 'DELETE_RESULT', resultElementId: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
