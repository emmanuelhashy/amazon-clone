import React from 'react'
import "./checkoutProduct.css"
import {useStateValue} from "../stateProvider/StateProvider"
function CheckoutProduct({id, image, title, price, rating}) {
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((index) => (
                        <p key={index}>star</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct