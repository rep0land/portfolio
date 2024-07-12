import React from 'react'
import Icon from '../shared/Icon'
import NavBar from '../shared/NavBar'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Icon />
            <NavBar />
        </div>
    )
}

export default Header