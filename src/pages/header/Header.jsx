import React from 'react'
import './header.css'
import NavListItem from '../../components/NavListItem'
import navListData from '../../data/navListData'
import Search from '../../components/Search'

const Header = () => {
  return (

   <header>
    <a href="/" className="logo">CineMate</a>
    <div className=''>

        <ul className='nav'>
        {    navListData.map(nav => (
                <NavListItem key={nav._id} nav={nav}/>
            ))
        }
        {/* <NavListItem name='Home'/>
        <NavListItem name='Schedule'/> */}
        </ul>
    </div>
        <Search />
   </header>
  )
}

export default Header