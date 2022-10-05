import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendList';
import friends from '../Moc/friends.json';
import { TransactionsHistory } from 'components/TransactionHistory';
import transactions from '../Moc/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
      <FriendsList friends={ friends }/>
      <TransactionsHistory items={ transactions }/>
    </div>
  );
};
