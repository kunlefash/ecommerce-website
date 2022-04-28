import React from 'react'
import "./home.css"
import Product from '../product/Product'
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__row">
                <Product title="Sony PlayStation 4 Slim" price= {599} image="https://imgs.search.brave.com/e3OFQOFpgWSlz26MfuKdUtXJGb41XWkY9xU2hmDWcwY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/eXBSOHhHWm5IS2o3/ZGxic2d5X2J3SGFI/YSZwaWQ9QXBp" rating= {3}/>
                <Product title="Apple iPhone 13 Pro Max" price= {899} image="https://imgs.search.brave.com/alYJA03uXEAfO2IFzu0PkCmJH-W3XBGaxUIc6aOm-Ws/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/UW9vSEZzdk56MEV5/TVlWS013S2pRSGFE/NCZwaWQ9QXBp" rating= {5}/>
                <Product title="Samsung 50 inches SmartTv HD "  price= {1599} image="https://imgs.search.brave.com/WK8AarJX6x52qwE_gCG7kRRKszzpS-L8Alm_lib6jf4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/ZWlqN1hMUjhkRC1O/emVDc09jczNRSGFI/YSZwaWQ9QXBp" rating= {2}/>
             
              
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