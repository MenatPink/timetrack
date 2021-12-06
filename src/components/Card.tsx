import React from 'react';
import '../styles/globals.scss';
import '../styles/components/Card.scss';

const Card = (props: any) => {
	return (
		<div className= {`card ${props.color}`}>
			<img className="card-icon" src={`/images/icon-${props.icon}.svg`} alt="Ellipsis Icon" />
			<div className="card-inner">
				<div className="card-content">
					<div className="mt-2 flex-between center-align">
						<p>{props.title}</p>
						<img src="/images/icon-ellipsis.svg" alt="" />
					</div>
					<h1 className = "font-light">{props.hrs}hrs</h1>
					<p className = "font-medium mb-3 mt-1 card-caption">Last Week - {props.prevWeekHours}hrs</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
