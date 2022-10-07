import { Profile } from './Profile/Profile';
import profile from '../Moc/friends.json';
import { Statistics } from './Statistics/Statistics';
import statistics from '../Moc/data.json'
import { FriendsList } from './FriendList/FriendList';
import friends from '../Moc/friends.json';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';
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
      <Profile profile={ profile }/>
      <Statistics statistics={ statistics }/>
      <FriendsList friends={ friends }/>
      <TransactionsHistory items={ transactions }/>
    </div>
  );
};
