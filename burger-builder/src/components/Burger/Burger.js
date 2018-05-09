import React from 'react';

import Style from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, index) => {
				return <BurgerIngredient key={igKey + index} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <h6>Please add ingredients!</h6>;
	}

	return (
		<div className={Style.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
