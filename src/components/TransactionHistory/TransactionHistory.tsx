import s from './TransactionHistory.module.css';

type Data = {
  id: string,
  type: string,
  amount: string,
  currency: string
};


interface Props {
  items: Data[]
};

export default function TransactionHistory({ items }: Props) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <tr className={s.string} key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
