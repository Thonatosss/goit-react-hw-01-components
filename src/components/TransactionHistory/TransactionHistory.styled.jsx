import styled from "@emotion/styled";

const Table = styled.table`
  width: 500px;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const TableHead = styled.thead`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  background-color: #f2f2f2;
  font-weight: bold;
  text-transform: uppercase;
`;
const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

const TH = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
`;

export { Table, TableHead, TableCell, TH };