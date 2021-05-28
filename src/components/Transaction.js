import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalTransaction'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>${sign}{Math.abs(transaction.amount).toFixed(2)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
            <span>{transaction.time}</span>
        </>
    )
}
