import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

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
		increment: () => dispatch({ type: actionTypes.INCREMENT }),
		decrement: () => dispatch({ type: actionTypes.DECREMENT }),
		add: () => dispatch({ type: actionTypes.ADD, val: 10 }),
		subtract: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
		storeResult: result =>
			dispatch({ type: actionTypes.STORE_RESULT, result: result }),
		deleteResult: id =>
			dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
