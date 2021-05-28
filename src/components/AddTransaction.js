import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalTransaction';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { transactions } = useContext(GlobalContext);
    const { addTransaction } = useContext(GlobalContext);
    const optionDateTime = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
    };

    const handleTransaction = (e, type) => {
        e.preventDefault();
        const newTransaction = {
            id: transactions.length > 0 ? transactions.length + 1 : 1,
            text,
            amount: type === "payment" ? -Math.abs(amount) : Math.abs(amount),
            time: new Intl.DateTimeFormat("en-GB", optionDateTime).format(new Date())
        };
        addTransaction(newTransaction);
        window.localStorage.setItem('transactions', JSON.stringify(transactions));
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br /></label>
                    <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="btn-container">
                    <button className="btn plus" onClick={e => handleTransaction(e, 'income')}>Add Income</button>
                    <button className="btn minus" onClick={e => handleTransaction(e, 'payment')}>Add Payment</button>
                </div>
            </form>
        </>
    )
}
