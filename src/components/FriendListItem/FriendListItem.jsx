import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status status={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}; 