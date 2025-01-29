import React from 'react';

function Expenses({ transactions }) {
  return (
    <div>
      <h3 align="center">Transaction History</h3><br/>
      <table border="6" cellPadding="6px" cellSpacing="4px" width="400px" height="400px">
        <thead>
          <tr>
            <td>Date </td>
            <td>Time </td>
            <td>Type </td>
            <td>Method </td>
            <td>Cost </td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>{transaction.type}</td>
              <td>{transaction.method}</td>
              <td>{transaction.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
