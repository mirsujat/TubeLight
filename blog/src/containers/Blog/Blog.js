import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// Link component helps to prevent page reloading
// When reload occured React App loses the state

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	};

	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/posts/" exact>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true'
									}}>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{this.state.auth ? (
						<Route path="/new-post" component={AsyncNewPost} />
					) : null}
					<Route path="/posts" component={Posts} />
					<Redirect from="/" to="/posts" />
					{/* <Route path="/" component={Posts} /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
