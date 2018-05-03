import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA6-Nr8vAEKCEi4UardYG54_HHuFFQSiU8',
      authDomain: 'manager-de26f.firebaseapp.com',
      databaseURL: 'https://manager-de26f.firebaseio.com',
      projectId: 'manager-de26f',
      storageBucket: 'manager-de26f.appspot.com',
      messagingSenderId: '743326133195'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
