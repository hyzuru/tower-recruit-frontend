import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './navigation.css'

export default function Navigation() {

  const [showMenu, setShowMenu] = useState(false)

  let menu 

  if (showMenu) {
    menu = <div className="menu">
        <header className="navbar">
          <h1 className="menutitle">Menu</h1>
          <button onClick={() => setShowMenu(false)} >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </header>
        <a href="/" className="menuitem">
          This is a link in the menu
        </a>
        <a href="/" className="menuitem">
          This is another link
        </a>
      </div>
  }

  return (
    <>
      <nav>
        <button onClick={() => setShowMenu(!showMenu)} >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      {menu}
    </>
  )
}
