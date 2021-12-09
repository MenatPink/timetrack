import React from 'react';
import Grid from './Grid';
import { connect } from 'react-redux';
import '../styles/containers/App.scss';
import {
	setTimeFrameToDaily,
	setTimeFrameToWeekly,
	setTimeFrameToMonthly,
} from '../actions';

const mapStateToProps = (state: any) => {
	return {
		timeFrame: state.timeFrame,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setTimeFrameToDaily: () => dispatch(setTimeFrameToDaily()),
		setTimeFrameToWeekly: () => dispatch(setTimeFrameToWeekly()),
		setTimeFrameToMonthly: () => dispatch(setTimeFrameToMonthly()),
	};
};

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			loading: true,
			cards: null,
		};
	}

	componentDidMount() {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ cards: data, loading: false });
			});
	}

	render() {
		return (
			<div className={`app`}>
				{this.state.loading || !this.state.cards ? (
					<div>Loading...</div>
				) : (
					<Grid
						data={this.state.cards}
						timeFrame={this.props.timeFrame}
						changeTimeFrameToDaily={this.props.setTimeFrameToDaily}
						changeTimeFrameToWeekly={this.props.setTimeFrameToWeekly}
						changeTimeFrameToMonthly={this.props.setTimeFrameToMonthly}
					/>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
