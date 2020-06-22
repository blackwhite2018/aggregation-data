import React from 'react';
import PropTypes from 'prop-types';

const YearTable = ({ list }) => (
    <div>
        <h2>Year Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({ _id, year, amount }) => (
                    <tr key={ _id }>
                        <td>{ year }</td>
                        <td>{ amount }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

YearTable.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default YearTable;

