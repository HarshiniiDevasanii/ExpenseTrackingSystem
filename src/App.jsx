import './App.css';
import React, { useState } from 'react';
import Expenses from './Expenses';

function App() {
  const [income, setIncome] = useState(0);
  const [cost, setCost] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const it = ["Food", "Shopping", "Bills", "Recharge", "Others"];
  const be = ["Cash", "UPI", "Netbanking"];

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (income < 0 || income < cost) {
      alert("Cost should be lesser than income");
      setCost(0);
    } else {
      const newTransaction = {
        date: e.target[1].value,
        time: e.target[2].value,
        type: e.target[3].value,
        method: e.target[4].value,
        cost: cost
      };

      setIncome(prevIncome => prevIncome - cost);
      setTotalExpenses(prevTotal => prevTotal + cost);
      setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
      setCost(0);
      e.target.reset(); // Reset form fields
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <img
              id="exp"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/online-expensive-report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--expenses-tracker-neo-banking-pack-finance-icons-5727732.png"
              height="40px"
              width="60px"
              alt="Expense Tracker Icon"
            />
          </li>
          <center>
            <li id="heading">Expense Tracker</li>
          </center>
        </ul>
      </nav>
      <div id="formin">
        <form onSubmit={handleAddTransaction}>
          <div>
            <label>Income </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value, 10) || 0)}
            />
          </div>
          <div>
            <label>Date </label>
            <input type="date" />
          </div>
          <div>
            <label>Time </label>
            <input type="time" />
          </div>
          <div>
            <label>Type of Expense </label>
            <select>
              {it.map((i, index) => <option key={index} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label>Method of Payment </label>
            <select>
              {be.map((b, index) => <option key={index} value={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label>Cost </label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(parseInt(e.target.value, 10) || 0)}
            />
          </div>
          <div>
            <h4>Total Expenses: Rs {totalExpenses}</h4><br />
            <h4>Remaining Income: Rs {income}</h4>
          </div>
          <div id="add">
            <button type="submit">Add Transaction</button>
          </div>
        </form>
        <div id="elem"><Expenses transactions={transactions} /></div>
    </div>
      </div>
  );
}

export default App;
