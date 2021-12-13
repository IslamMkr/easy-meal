import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <Link to='/recipes'>Recipes</Link>
            <Link to='/categories'>Categories</Link>
            <Link to='/'>Easy Meal</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
