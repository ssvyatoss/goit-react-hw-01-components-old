import PropTypes from 'prop-types';

export const TransactionHistoryItem = ( { type, amount, currency } ) => {
    return (
        <tr>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
    )
} 

TransactionHistoryItem.propTypes = { 
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
 }