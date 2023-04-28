import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  aligh-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  width: 150px;
  gap: 10px;
  padding: 5px;
`;
const Status = styled.span`
margin-top: 20px;
text-align: center;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${props => {
    switch (props.status) {
        case true:
            return 'green';
        case false:
            return 'red';
            default:
                return '#ffffff';
    }
}}
`;

export { ListItem, Status };
