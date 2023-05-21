import Profile from "./Profile/Profile"
import Statistic from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
    <Profile/>
    <Statistic />
    <FriendList />
    <TransactionHistory />
    </>
  );
};


