import PropTypes from 'prop-types'
import {
  Container,
  Description,
  List,
  UserName,
  UserInfo,
  ListItem,
} from './Profile.styled';
export default function Profile({username, tag, location, avatar, followers, views, likes}) {
  return (
    <Container>
      <Description>
        <img
          src={avatar}
          alt="User avatar"
          width={50}
        />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <List>
        <ListItem>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </ListItem>
      </List>
    </Container>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

}
