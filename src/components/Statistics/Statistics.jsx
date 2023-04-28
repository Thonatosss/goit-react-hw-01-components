import PropTypes from 'prop-types';
import { Container, Title, List, ListItem } from './Statistics.styled';

export default function Statistics({ title, stats }){
    return (
      <Container>
        {title && <Title>{title}</Title>}

        <List>
          {stats.map(({label, percentage, id}) => (
            <ListItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </ListItem>
          ))}
        </List>
      </Container>
    );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
