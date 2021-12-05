import react from 'react';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import '../styles/containers/Grid.scss';

const Grid = () => {
	const cards = [];
	for (let i = 0; i < 6; i++) {
		cards.push(<Card key = {i}/>);
	}

	return (
		<div className="grid">
			<ProfileCard/>
			{cards}
		</div>
	);
};

export default Grid;
