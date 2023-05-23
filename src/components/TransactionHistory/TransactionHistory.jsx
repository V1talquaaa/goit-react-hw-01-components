import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
return (
<table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.columnNames}>Type</th>
      <th className={css.columnNames}>Amount</th>
      <th className={css.columnNames}>Currency</th>
    </tr>
  </thead>
  <tbody className={css.tableBody}>
    {items.map(({id, type, amount, currency}) => {
      return(
                <tr className={css.transactionLine} key={id}>
        <td className={css.transactionValue}>{type}</td>
        <td className={css.transactionValue}>{amount}</td>
        <td className={css.transactionValue}>{currency}</td>
      </tr>
      )
    })}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}).isRequired).isRequired
}


export {TransactionHistory}