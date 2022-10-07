import { TransactionHistoryItem } from './TransactionHistoryItem';
import css from './transactionHistory.module.css';

export const TransactionsHistory = ({ items }) => {
    console.log(items);
  return (
    <table className={ css.transactionHistory }>
      <thead className={ css.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items?.map(items => (
             <TransactionHistoryItem key={items.id}
                type={items.type}
                amount={items.amount}
                currency={items.currency}
             />
        ))}
      </tbody>
    </table>
  );
};
