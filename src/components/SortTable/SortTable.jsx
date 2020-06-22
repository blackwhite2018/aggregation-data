import React from 'react';
import PropTypes from 'prop-types';

const SortTable = ({ list }) => (
    <div>
        <h2>Sort Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({ _id, date, amount }) => (
                    <tr key={ _id }>
                        <td>{ date }</td>
                        <td>{ amount }</td>
                    </tr>
                ))}
            </tbody>
         </table>
    </div>
);

SortTable.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default SortTable;

