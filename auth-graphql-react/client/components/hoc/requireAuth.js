import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../../queries/currentUser';
import { hashHistory } from 'react-router';

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentDidMount() {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push('/login');
      }
    }
    render() {
      return <wrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
