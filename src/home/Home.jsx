import React from 'react'
import "./home.css"
import Product from '../product/Product'
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__row">
                <Product />
                <Product />
                <Product />
              
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
            </div>

        </div>
    </div>
  )
}

export default Home