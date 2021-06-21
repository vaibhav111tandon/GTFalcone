import React from 'react'

import './Header.css';

function Header() {

    return (
        <header>
            <div className="app__menu">
                <button className="app__menu__button" onClick={() => window.location.href = '/'}>Reset</button>
                <button className="app__menu__button" onClick={() => window.location = 'https://geektrust.in'}>GeekTrust Home</button>
            </div>
            <h1 className="app__header">Finding Falcone!</h1>
      </header>
    )
}

export default Header
