import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentWillMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error: error });
				}
			);
		}

		errorConfirmHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<Wrapper>
					<Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Wrapper>
			);
		}
	};
};

export default withErrorHandler;
