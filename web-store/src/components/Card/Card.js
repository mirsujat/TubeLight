import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const card = () => {
	return (
		<Card
			header={
				<CardTitle reveal image="./assets/images/office.jpg" waves="light" />
			}
			title="Card Title"
			reveal={
				<p>
					Here is some more information about this product that is only revealed
					once clicked on.
				</p>
			}>
			<p>
				<a href="">This is a link</a>
			</p>
		</Card>
	);
};

export default card;
