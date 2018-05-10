import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Style from './BurgerIngredient.css';

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case 'bread-bottom':
				ingredient = <div className={Style.BreadBottom} />;
				break;

			case 'bread-top':
				ingredient = (
					<div className={Style.BreadTop}>
						<div className={Style.Seeds1} />
						<div className={Style.Seeds2} />
					</div>
				);
				break;

			case 'meat':
				ingredient = <div className={Style.Meat} />;
				break;

			case 'cheese':
				ingredient = <div className={Style.Cheese} />;
				break;

			case 'bacon':
				ingredient = <div className={Style.Bacon} />;
				break;

			case 'salad':
				ingredient = <div className={Style.Salad} />;
				break;
			default:
				ingredient = null;
		}

		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
