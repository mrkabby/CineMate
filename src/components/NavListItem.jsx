import React from 'react'
import './navListItem.css'

const NavListItem = ({ nav }) => {
  return (
    <ul className='nav active'>
    <li>
      <a href={nav.link} >{nav.name}</a>
    </li>
    </ul>
  )
}

export default NavListItem




