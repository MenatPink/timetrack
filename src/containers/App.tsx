import React from 'react';
import Grid from './Grid';
import '../styles/containers/App.scss';

// interface ITimeframes {
// }
// interface IProps {
// }

// interface IState{
// 	cardData: Array<ITimeframes>
// }

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			loading: true,
			cards: null,
		};
	}

	async componentDidMount() {
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
					<Grid data = {this.state.cards}/>
				)}
			</div>
		);
	}
}

export default App;
