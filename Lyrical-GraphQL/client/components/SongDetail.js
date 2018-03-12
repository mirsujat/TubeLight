import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchOneById from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div />;
    }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchOneById, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
