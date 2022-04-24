import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="" alt='logo' />

      <div className='header__search'>
        <input type="Search" className='header__searchTab' />
        <SearchIcon className="header__searchIcon"/>
        
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__tags'>
              Sign In
          </span>

        </div>
        <div className='header__option'>
          <span className='header__tags'>
            Filter
          </span>
        </div>
        <div className='header__option'>
          <span className='header__tags'>
            Your Cart
          </span>
        </div>
      </div>

      
    </div>
  )
}

export default Header