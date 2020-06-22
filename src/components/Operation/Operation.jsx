import React from 'react';
import PropTypes from 'prop-types';

const getMonthGroup = (list, currentYear) => {
    return list.reduce((acc, item) => {
	    const [year, month] = item.date.split('-');
		if (+year === currentYear) {
			let pos = acc.findIndex(elem => {
				const [, dataMonth] = elem.date.split('-');
				return month === dataMonth;
			});
					
			if (pos !== -1) {
				let clone = [...acc];
				clone[pos].amount += item.amount;
				return clone;
			}
			return [...acc, { ...item }];
		}
		return acc;
	}, []);
};

const getYearGroup = list => {
    return list.reduce((acc, item) => {
		const [year] = item.date.split('-');
		let pos = acc.findIndex(elem => {
			const [dataYear] = elem.date.split('-');
			return year === dataYear;
		});
					
		if (pos !== -1) {
			let clone = [...acc];
			clone[pos].amount += item.amount;
			return clone;
		}
		return [...acc, { ...item }];
    }, []);
};

const Operation = (MonthTable, YearTable, SortTable, list) => {
	const monthGroup = getMonthGroup(list, (new Date()).getFullYear());
	const yearGroup = getYearGroup(list);
    const sortList = [...list].sort((a, b) => a.date - b.date);

    return class extends React.Component {
        render() {
            return (
                <>
                    <MonthTable list={ monthGroup } />
                    <YearTable list={ yearGroup } />
                    <SortTable list={ sortList } />
                </>
            );
        }
    };
};

Operation.propTypes = {
    MonthTable: PropTypes.element.isRequired,
    YearTable: PropTypes.element.isRequired,
    SortTable: PropTypes.element.isRequired,
    list: PropTypes.array
};

export default Operation;


