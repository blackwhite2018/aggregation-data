import React from 'react';
import PropTypes from 'prop-types';

const MonthTable = ({ list }) => (
    <div>
        <h2>Month Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({ _id, month, amount }) => (
                    <tr key={ _id }>
                        <td>{ month }</td>
                        <td>{ amount }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

MonthTable.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default MonthTable;

