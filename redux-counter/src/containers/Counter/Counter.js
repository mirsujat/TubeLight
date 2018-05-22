import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	increment,
	decrement,
	add,
	subtract,
	storeResult,
	deleteResult
} from '../../store/actions/index';

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
				<button onClick={() => this.props.storeResult(this.props.ctr)}>
					Store Result
				</button>
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
		ctr: state.ctr.counter,
		results: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
		add: () => dispatch(add(10)),
		subtract: () => dispatch(subtract(15)),
		storeResult: result => dispatch(storeResult(result)),
		deleteResult: id => dispatch(deleteResult(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
