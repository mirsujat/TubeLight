import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		// Uncomment the console.log statement and inspect the props object
		// i.e: history, location and match
		// history object gives us some methods to work with i.e; push, replace(for Ridirect)
		// loaction object gives us pathname, search, hash
		// match gives us params {}, path and url
		// console.log(this.props);
		axios
			.get('/posts')
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Mir'
					};
				});
				this.setState({ posts: updatedPosts });
			})
			.catch(error => {
				console.log(error);
				//this.setState({ error: true });
			});
	}

	// Programatic navigation using history Object
	// This is important when we want to navigate after a given operation finished
	postSelectedHandler = id => {
		this.props.history.push({ pathname: '/posts/' + id });
		// Or
		//this.props.history.push('/posts/' + id );
	};

	// This is usefull When we want to navigate through Link
	// postSelectedHandler = id => {
	// 	this.setState({ selectedPostId: id });
	// };

	render() {
		let posts = (
			<p style={{ textAlign: 'center', color: 'red' }}>
				Something went wrong!!
			</p>
		);
		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					//<Link to={'/posts/' + post.id} key={post.id}>
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
					//</Link>
				);
			});
		}

		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route
					path={this.props.match.url + '/:id'}
					exact
					component={FullPost}
				/>
			</div>
		);
	}
}

export default Posts;
