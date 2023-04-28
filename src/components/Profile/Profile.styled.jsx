import styled from '@emotion/styled';

const Container = styled.div`
  height: 300px;
  width: 250px;
  background-color: #f5fffa;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 100px
`;
const Description = styled.div`
  text-align: center;
`;
const List = styled.ul`
  list-style-type: none;
`;
const ListItem = styled.li`
:not(:last-child){
    margin-bottom: 10px;
`;
const UserName = styled.p`
font-size: 20px;
`
const UserInfo = styled.p`
color: silver;

`
export { Container, Description, List, UserName, UserInfo, ListItem };
