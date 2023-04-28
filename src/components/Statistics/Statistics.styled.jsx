import styled from '@emotion/styled';

const Container = styled.section`
  max-width: 600px;
  height: 150px;
  background-color: #f5fffa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
const Title = styled.h2`
  font-size: 30px;
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0;
`;
const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50px;
  width: 50px
`;
export { Container, Title, List, ListItem };