import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import HeaderIcons from './HeaderIcons'

const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="container header__container">
          <div className="header__items">
            <div className="header__left">
              <div className="header__text">
                <h5>Hello I'm</h5>
                <h1>Enoch Chandayengerwa</h1>
                <h5 className="text-light">
                  Software Developer
                </h5>
                <CTA />
              </div>  
              <HeaderSocials/>
            </div>
            
            <div className='icons'>
              <HeaderIcons/>
            </div>
          </div>
        </div>  
      </div>
      
    </header>
  )
}

export default Header