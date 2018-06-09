import React from 'react';
import { Footer } from 'react-materialize';

const footer = () => {
	return (
		<Footer
			copyrights="& 2018 Mir Sujat. All Right Reserved."
			moreLinks={
				<a className="grey-text text-lighten-4 right" href="#!">
					mir.sujat@gmail.com
				</a>
			}
			links={
				<ul>
					<li>
						<a className="grey-text text-lighten-3" href="#!">
							Basketball
						</a>
					</li>
					<li>
						<a className="grey-text text-lighten-3" href="#!">
							Cricket
						</a>
					</li>
					<li>
						<a className="grey-text text-lighten-3" href="#!">
							Badminton
						</a>
					</li>
					<li>
						<a className="grey-text text-lighten-3" href="#!">
							Soccer
						</a>
					</li>
				</ul>
			}
			className="Footer">
			<h5 className="white-text">Become an Entrepreneur</h5>
			<p className="grey-text text-lighten-4">
				Learn Business from our business coach
			</p>
		</Footer>
	);
};

export default footer;
