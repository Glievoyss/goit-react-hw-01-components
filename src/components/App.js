import React from 'react';
import ProfileCard from './ProfileCard/PeofileCard';
import user from '../profileUser';
import Stats from './Stats/Stats';
import statsList from '../statsList';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import items from '../transactions.json';

const App = () => (
  <>
    <ProfileCard user={user} />
    <Stats title="Upload stats" stats={statsList} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </>
);

export default App;
