import react from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authIndexPage = props => (
	<div>
		<h1>The Auth Index Page of {props.appName}</h1>
		<User name="Mir Sujat" age={36} />
		<p>
			<Link href="/">
				<a>Please click here to Go Home</a>
			</Link>
		</p>

		<style jsx>{`
			p {
				color: blue;
			}
			div {
				border: 1px solid #eee;
				box-shadow: 0 2px 3px #ccc;
				padding: 20px;
				text-align: center;
			}
			@media (max-width: 600px) {
				div {
					background: blue;
				}
			}
		`}</style>
	</div>
);

authIndexPage.getInitialProps = context => {
	console.log(context);
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ appName: 'My Super App' });
		}, 1000);
	});
	return promise;
};

export default authIndexPage;
