import React from 'react'
import './navListItem.css'

const NavListItem = ({ nav, navOnClick }) => {
  return (
    <ul className='nav active'>
    <li>
      <a href={nav.link} 
       className={`${nav.active  ? 'active' : undefined}`}
      onClick={()=>{
        navOnClick(nav._id);
      }}
        >
          {nav.name}
        </a>
    </li>
    </ul>
  )
}

export default NavListItem




