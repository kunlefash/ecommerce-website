import React from 'react'
import "./product.css"
import IMG from "../assets/herobg1.png"

function Product({title, image, price, rating}) {
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}</strong>
        </p>
        <div className="product__ratings">
          {Array(rating).fill().map((_, i)=>(
            <p>*</p>

          ))}
          
        </div>
      </div>
      <img src= {IMG} alt="product" className='product__image' />
      <button className='product_button'>Add to Cart</button>
      </div>
  )
}

export default Product