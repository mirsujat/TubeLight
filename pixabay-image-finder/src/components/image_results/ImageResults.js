import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {
	render() {
		let imageListContent;
		const { images } = this.props;
		if (images) {
			imageListContent = (
				<GridList col={3}>
					{images.map(img => (
						<GridTile
							key={img.id}
							title={img.tags}
							subtitle={
								<span>
									By <strong>{img.user}</strong>
								</span>
							}
							actionIcon={
								<IconButton>
									<ZoomIn color="white" />
								</IconButton>
							}>
							<img src={img.largeImageURL} alt="" />
						</GridTile>
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
