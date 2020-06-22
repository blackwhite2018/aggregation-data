import React from 'react';
import shortid from 'shortid';
import Operation from './components/Operation/Operation';
import MonthTable from './components/MonthTable/MonthTable';
import YearTable from './components/YearTable/YearTable';
import SortTable from './components/SortTable/SortTable';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	componentDidMount() {
		if (!this.state.isLoad) {
			this.loadActualList();
		}
	}

	loadActualList = async () => {
		const response = await fetch(process.env.REACT_APP_CURRENCY_URL);
		const json = await response.json();
		this.setState({
			list: json.list,
			isLoad: true
		});
	};

    render() {
		const { isLoad } = this.state;
		if (isLoad) {
			const { list } = this.state;
			const listIds = list.reduce((acc, item) => {
				return [
					...acc,
					{
					_id: shortid.generate(),
					...item
					}
				];
			}, []);

			const Component = Operation(MonthTable, YearTable, SortTable, listIds);

			return <Component />;
		} else {
			return <div>Download...</div>;
		}
    }
};