import React from 'react'
import "./Product.css"
import { useStateValue } from "../stateProvider/StateProvider"

function Product({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        //Add item to basket...
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
