import Profile from "components/Profile/Profile";
import user from "user.json";

import Statistics from "components/Statistics/Statistics";
import data from 'data.json';

import FriendList from "components/FriendsList/FriendList";
import friends from 'friends.json'

import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import transactions from 'transactions.json'

import { AppContainer } from "./App.styled";

export const App = () => {
  return (
    <AppContainer>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
     />
     
      <Statistics
        title={'UPLOAD STATS'}
        stats = {data}
       />
     <FriendList
       friends={friends} 
     />
     <TransactionHistory 
     items={transactions}
     />
      
    </AppContainer>
      );
};
