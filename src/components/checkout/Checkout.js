import React from 'react'
import { useStateValue } from "../stateProvider/StateProvider"
import "./Checkout.css"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"
import Subtotal from "../subtotal/Subtotal"
function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="ad"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or add item to basket click the add to basket button
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket.map(item => {
                            console.log(item)
                        return (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        )
                        })}
                    </div>
                )}

            </div>
            {basket?.length > 0 && 
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            }
            
            
        </div>
    )
}

export default Checkout
