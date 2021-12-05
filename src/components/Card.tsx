import React from 'react';
import '../styles/globals.scss';
import '../styles/components/Card.scss';

// console.log(ellipsis);

const Card = () => {
	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-content">
					<div className="mt-1 flex-between center-align">
						<p>Work</p>
						<img src="/icon-ellipsis.svg" alt="" />
					</div>
					<h1 className = "font-light">32hrs</h1>
					<p className = "font-medium mb-3 mt-1 card-caption">Last Week - 36hrs</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
