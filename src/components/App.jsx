import Profile from "./Profile/Profile"
import Statistic from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import friends from '../Data/friends.json'
import user from '../Data/user.json'
import data from '../Data/data.json'
import transactions from '../Data/transactions.json'
export {friends, user, data, transactions}



export const App = () => {
  return (
    <>
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistic title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
    </>
  );
};

