import React from 'react';

import Style from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
	console.log(props);
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((__, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
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
