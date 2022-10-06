import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendsList } from './friendList/FriendList';
import friends from './Moc/friends.json';
import { TransactionsHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from './Moc/transactions.json';

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
