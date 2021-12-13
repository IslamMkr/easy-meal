import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = ({ active }) => {
    return (
        <div className="header">
            <Link to='/recipes' id={active === 'recipes' ? 'active' : ''} className='nav-item recipes'>RECIPES</Link>
            <Link to='/categories' id={active === 'categories' ? 'active' : ''} className='nav-item categories'>CATEGORIES</Link>
            <Link to='/' id={active === 'home' ? 'active' : ''} className='nav-item easy-meal'>EASYMEALS</Link>
            <Link to='/about' id={active === 'about' ? 'active' : ''} className='nav-item about'>ABOUT</Link>
            <Link to='/contact' id={active === 'contact' ? 'active' : ''} className='nav-item contact'>CONTACT</Link>
        </div>
    )
}
