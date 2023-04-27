import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList ({friends}){
    return(
        <ul className="friend-list">
            {friends.map(data => (
                <FriendListItem
                key={data.id}
                avatar={data.avatar}
                name={data.name}
                isOnline={data.isOnline}
                />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
