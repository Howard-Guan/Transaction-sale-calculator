import React,{useState} from 'react'
import './Calculator.css';
import { products } from '../../product.jsx';
import Product from '../Product/Product.jsx';
import Summary from '../Summary/Summary.jsx';

const Calculator = () => {

    const [summary, setSummary] = useState([]);

    const addProduct = (product) => {
        const newSummary = [...summary, product];
        setSummary(newSummary);
    }

    const voidPurchase = () => {
        setSummary([]);
    }

    const handleExport = e => {
        const element = document.createElement("a");
        const stringOfSummary = JSON.stringify(summary, null, "\t");
        const file = new Blob([stringOfSummary], {
            type: 'text/plain;charset=utf-8'
        });
        element.href = URL.createObjectURL(file);
        element.download = "Export Transaction Sales.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="container">
            <div className="left">
                {
                  products.map((product)=>
                    <Product 
                    product={product} 
                    addProduct={addProduct} 
                    key={product.id}/>
                )}
            </div>
            <div className="right">
                <Summary 
                summary={summary} 
                voidPurchase={voidPurchase} 
                handleExport={handleExport}/>
            </div>
        </div>
    )
}

export default Calculator;