import PropTypes from 'prop-types';
import { Table, TableHead, TableCell, TH } from './TransactionHistory.styled';
export default function TransactionHistory({items}) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  