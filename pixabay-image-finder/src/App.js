import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
