import css from './FriendList.module.css';
import PropTypes from 'prop-types';



const FriendList = ({friends}) => {
    return <ul className={css.friendlist}>
      {friends.map(({avatar, name, id, isOnline}) => {
        return (
          <li key={id} className={css.item}>
          <span className={isOnline? css.statusisOnline:css.statusisOfline}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
        )
      })}
    </ul>
}

  
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export {FriendList}

