// import react from 'react';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import '../styles/containers/Grid.scss';

// interface IProps{
// 	title: string,
// 	hrs: number,
// 	prevWeekHours: number,
// 	color: string,
// 	icon: string
// }

interface IProps{
	data: any
}

const Grid = (props: IProps) => {
	const cards = props.data.map((card: any, i: number)=>{
		console.log(i)
		return <Card 
		key={i} 
		title={card.title}
		hrs={card.timeframes.daily.current}
		prevWeekHours={card.timeframes.daily.previous}
		color={'orange'}
		icon={'play'}
		/>
	})

	return (
		<div className="grid">
			<ProfileCard/>
			{cards}
		</div>
	);
};

export default Grid;
