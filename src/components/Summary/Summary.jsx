import React from 'react';
import './Summary.css';
import TransactionItem from '../TransactionItem/TransactionItem.jsx';

const Summary = (props) => {

  const summary = props.summary;

  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 0; i < summary.length; i++) {
    const item = summary[i];
    subTotal = subTotal + item.price;
    tax = tax + (item.price * item.tax);
    total = subTotal + tax;
  }

  return (
    <div className='summaryContainer'>
        <div className="transactionContainer">
            <h1>Transaction Detail</h1>
            {
              summary.map((transactionItem, index)=>
                <TransactionItem 
                transactionItem={transactionItem} 
                key={index}
                />
            )}
            <h3>Item(s) in Cart: {summary.length}</h3>
        </div>
        <div className="priceSection">
            <h3>Subtotal: ${subTotal}</h3>
            <h3>Tax: ${tax}</h3>
            <h3>Total: ${total}</h3>
        </div>
        <div className="summaryButtons">
            <button className="voidButton" onClick={()=>props.voidPurchase()}>Void</button>
            <button className="saveButton" onClick={()=>props.handleExport()}>Save</button>
        </div>
    </div>
  )
}

export default Summary;