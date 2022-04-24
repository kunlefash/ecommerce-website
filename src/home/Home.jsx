import React from 'react'
import "./home.css"
import IMG from "../assets/herobg1.png"
import Product from '../product/Product'
function Home() {
  return (
    <div className='Home'>
        <div className="home__container">
            <div className="home__row1">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row2"></div>
            <div className="home__row3"></div>

        </div>
    </div>
  )
}

export default Home