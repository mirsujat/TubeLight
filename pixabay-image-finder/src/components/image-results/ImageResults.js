import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {
	render() {
		let imageListContent;
		const { images } = this.props;
		if (images) {
			imageListContent = (
				<GridList cols={3}>
					{images.map(img => (
						<GridListTile
							key={img.id}
							title={img.tags}
							subtitle={
								<span>
									By <strong>{img.user}</strong>
								</span>
							}
							actionIcon={
								<IconButton>
									<Icon color="white" />
								</IconButton>
							}>
							<img src={img.largeImageURL} alt="pixabay images" />
						</GridListTile>
					))}
				</GridList>
			);
		} else {
			imageListContent = null;
		}

		return <div>{imageListContent}</div>;
	}
}

ImageResults.propTypes = {
	images: PropTypes.array.isRequired
};

export default ImageResults;
