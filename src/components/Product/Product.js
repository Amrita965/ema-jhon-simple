import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Products = ({product, handleAddToCart}) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="card">
            <div className="card-img">  
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>price: $<span>{price}</span></p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
                
            </div>
            <div className="btn-container">
                <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button> 
            </div>   
        </div>
    );
};

export default Products;