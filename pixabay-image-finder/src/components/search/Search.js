import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '9441414-97ca878be53622e5dca192efb',
		images: []
	};
	onTextChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<TextField
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search for Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={5} primaryText="5" />
					<MenuItem value={10} primaryText="10" />
					<MenuItem value={20} primaryText="20" />
					<MenuItem value={30} primaryText="30" />
					<MenuItem value={40} primaryText="40" />
					<MenuItem value={50} primaryText="50" />
				</SelectField>
			</div>
		);
	}
}

export default Search;
