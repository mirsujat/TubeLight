import React from 'react';

import Style from './Order.css';

const order = props => (
	<div className={Style.Order}>
		<p>Ingredients: Salad (1)</p>
		<p>
			Price: <strong>USD 5.45</strong>
		</p>
	</div>
);

export default order;
