import React from 'react';
import '../styles/components/ProfileCard.scss';

interface IProps {
	timeFrameData?: any;
	changeTimeFrameToDaily?: any,
	changeTimeFrameToWeekly?: any,
	changeTimeFrameToMonthly?: any,
}

const ProfileCard = (props: IProps) => {
	return (
		<div className="profile-card">
			<div className="profile-card-inner">
				<div className="profile-card-content">
					<img src="/images/image-jeremy.png" alt="" />
					<p className="font-medium mt-2">report for</p>
					<h1 className="font-light">Jeremy Robson</h1>
				</div>
			</div>
			<ul className="time-selector-container">
				<li onClick={() => props.changeTimeFrameToDaily()}>Daily</li>
				<li onClick={() => props.changeTimeFrameToWeekly()}>Weekly</li>
				<li onClick={() => props.changeTimeFrameToMonthly()}>Monthly</li>
			</ul>
		</div>
	);
};

export default ProfileCard;
