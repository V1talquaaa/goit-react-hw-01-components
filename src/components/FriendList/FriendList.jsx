import css from './FriendList.module.css';
// import { friends } from 'index';
import { friends } from '../App';

const FriendList = ({friends}) => {
    return <ul className={css.friendlist}>
        <Friends />
    </ul>
}
const Friends = () => {
    return friends.map(({ avatar, name, id, isOnline }) => {
      return (
        <li key={id} className={css.item}>
          <span className={isOnline? css.statusisOnline:css.statusisOfline}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    });
  };
  

export {FriendList}

