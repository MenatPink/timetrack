import React from 'react';
import '../styles/components/ProfileCard.scss';

const ProfileCard = () => {
	return (
		<div className="profile-card">
			<div className="profile-card-inner">
				<div className="profile-card-content">  
					<img src="/images/image-jeremy.png" alt="" />
					<p className = "font-medium mt-2">report for</p>
					<h1 className = "font-light">Jeremy Robson</h1>
				</div>
			</div>
					<ul className = "time-selector-container">
						<li>Daily</li>
						<li>Weekly</li>
						<li>Monthly</li>
					</ul>
		</div>
	);
};

export default ProfileCard;
