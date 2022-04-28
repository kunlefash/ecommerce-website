import React from 'react'
import "./home.css"
import Product from '../product/Product'
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__row">
                <Product title="Sony PlayStation 4 Slim" price= "$500" image="https://imgs.search.brave.com/e3OFQOFpgWSlz26MfuKdUtXJGb41XWkY9xU2hmDWcwY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/eXBSOHhHWm5IS2o3/ZGxic2d5X2J3SGFI/YSZwaWQ9QXBp" rating= "4"/>
                <Product title="Sony PlayStation 4 Slim" price= "$500" image="https://imgs.search.brave.com/e3OFQOFpgWSlz26MfuKdUtXJGb41XWkY9xU2hmDWcwY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/eXBSOHhHWm5IS2o3/ZGxic2d5X2J3SGFI/YSZwaWQ9QXBp" rating= "4"/>
                <Product title="Sony PlayStation 4 Slim" price= "$500" image="https://imgs.search.brave.com/e3OFQOFpgWSlz26MfuKdUtXJGb41XWkY9xU2hmDWcwY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/eXBSOHhHWm5IS2o3/ZGxic2d5X2J3SGFI/YSZwaWQ9QXBp" rating= "4"/>
             
              
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