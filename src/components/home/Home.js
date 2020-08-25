import React from 'react'
import "./Home.css"
import Product from "../product/Product.js"
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
           
            {/*product id, title, price, rating */}
            <div className="home__row">
                <Product
                    id="123232232"
                    title="The LeanStartup: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1232322321"
                    title="The LeanStartup1: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1232322322"
                    title="The LeanStartup2: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1232322323"
                    title="The LeanStartup3: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1232322324"
                    title="The LeanStartup4: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1232322325"
                    title="The LeanStartup4: How constant innovative creators"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>

            
            {/* product */}
        </div>

    )
}

export default Home
