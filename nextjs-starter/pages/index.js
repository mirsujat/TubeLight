import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
	static getInitialProps(context) {
		console.log(context);
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ appName: 'My App' });
			}, 1000);
		});
		return promise;
	}

	render() {
		return (
			<div>
				<h1>The Index Page of {this.props.appName}</h1>
				<p>
					Go to{' '}
					<Link href="/auth">
						<a>Auth</a>
					</Link>
				</p>
				<button onClick={() => Router.push('/auth')}>Go to Auth</button>
			</div>
		);
	}
}

export default IndexPage;
