import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

const card = () => {
	return (
		<Row>
			<Col m={6} s={12}>
				<Card
					header={<CardTitle reveal image="img/office.jpg" waves="light" />}
					title="Card Title"
					reveal={
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					}>
					<p>
						<a href="">This is a link</a>
					</p>
				</Card>
			</Col>
		</Row>
	);
};

export default card;
