import React from 'react'
import './Product.css';

const Product = (props) => {
    const {name, img, price, categories, tax, unit} = props.product;

    return (
        <div className="productContainer">
            <img className="image" src={img} alt="Product"/>
            <h5 className="name">{name}: ${price}/{unit}</h5>
            <h5>{categories} / tax rate: {tax} </h5>
            <div className="buttons">
                <button className="button" onClick={()=> props.addProduct(props.product)}>add to sales</button>
            </div>
        </div>
    )
}

export default Product;