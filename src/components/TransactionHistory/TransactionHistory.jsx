
import { transactions } from 'components/App'
import css from './TransactionHistory.module.css'


const TransactionHistory = () => {
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
    <Transactions transactions={transactions}/>
  </tbody>
</table>
    )
}

const Transactions = ({transactions}) => {
    return transactions.map(({id, type, amount, currency}) => {
        return (
        <tr className={css.transactionLine} key={id}>
        <td className={css.transactionValue}>{type}</td>
        <td className={css.transactionValue}>{amount}</td>
        <td className={css.transactionValue}>{currency}</td>
      </tr>
        )
    })
}



export {TransactionHistory}