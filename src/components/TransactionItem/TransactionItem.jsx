import React from 'react'
import './TransactionItem.css';

const TransactionItem = (props) => {

    const {name, price, unit} = props.transactionItem

    return (
        <div className="itemContainer">
            <div className="itemDetail">
                <h4>{name}</h4>
                <h4>${price}/{unit}</h4>
                <h4>X1</h4>
            </div>
        </div>
    )
}

export default TransactionItem