import react from 'react';

import User from '../../components/User';

const authIndexPage = () => (
	<div>
		<h1>The Auth Index Page</h1>
		<User name="Mir Sujat" age={36} />
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

export default authIndexPage;
