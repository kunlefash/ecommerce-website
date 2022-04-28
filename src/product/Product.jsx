import React from 'react'
import "./product.css"
import IMG from "../assets/herobg1.png"

function Product() {
  return (
    <div className='product'>
      <div className="product__info">
        <p>Apple iPhone 13 pro max</p>
        <p className='product__price'>
          <small>$</small>
          <strong>999.99</strong>
        </p>
        <div className="product__rating">
          <p>*</p>
        </div>
      </div>
      <img src= {IMG} alt="product" className='product__image' />
      <button className='product_button'>Add to Cart</button>
      </div>
  )
}

export default Product