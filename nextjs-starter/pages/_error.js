import react from 'react';
import Link from 'next/link';

const errorPage = () => (
	<div>
		<h1>Oops!! Something went wrong.</h1>
		<p>
			<Link href="/">
				<a>Please click here to Go back</a>
			</Link>
		</p>
	</div>
);

export default errorPage;
