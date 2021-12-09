// import react from 'react';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import '../styles/containers/Grid.scss';


interface IProps {
	data: any;
	timeFrame: string;
	changeTimeFrameToDaily: any;
	changeTimeFrameToWeekly: any;
	changeTimeFrameToMonthly: any;
}

const Grid = (props: IProps) => {
	const icons = ['work', 'play', 'study', 'exercise', 'social', 'self-care'];
	const colors = ['orange', 'blue', 'pink', 'green', 'purple', 'yellow'];



	return (
		<div className="grid">
			<ProfileCard
				timeFrameData={props.timeFrame}
				changeTimeFrameToDaily={props.changeTimeFrameToDaily}
				changeTimeFrameToWeekly={props.changeTimeFrameToWeekly}
				changeTimeFrameToMonthly={props.changeTimeFrameToMonthly}
			/>
			{(() => {
				switch (props.timeFrame) {
					case 'daily':
						const dailyCards = props.data.map((card: any, i: number) => {
							return (
								<Card
									key={i}
									title={card.title}
									hrs={card.timeframes.daily.current}
									prevWeekHours={card.timeframes.daily.previous}
									color={colors[i]}
									icon={icons[i]}
								/>
							);
						});
						return  dailyCards ;
					case 'weekly':
						const weeklyCards = props.data.map((card: any, i: number) => {
							return (
								<Card
									key={i}
									title={card.title}
									hrs={card.timeframes.weekly.current}
									prevWeekHours={card.timeframes.weekly.previous}
									color={colors[i]}
									icon={icons[i]}
								/>
							);
						});
						return weeklyCards;
					case 'monthly':
						const monthlyCards = props.data.map((card: any, i: number) => {
							return (
								<Card
									key={i}
									title={card.title}
									hrs={card.timeframes.monthly.current}
									prevWeekHours={card.timeframes.monthly.previous}
									color={colors[i]}
									icon={icons[i]}
								/>
							);
						});
						return monthlyCards;
				}
			})()}
		</div>
	);
};

export default Grid;
