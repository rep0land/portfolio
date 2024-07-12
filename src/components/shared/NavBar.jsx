
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
    return (

        <nav className='navBarGeneral'>
            <ul className='navBar_menu'>
                <li><Link className='navBar_item' to='/'> #Home   //</Link></li>
                <li><Link className='navBar_item' to='/AboutMe'>#AboutMe   //</Link></li>
                <li><Link className='navBar_item' to='/Skills'>#Skills   //</Link></li>
                <li><Link className='navBar_item' to='MyWork'>#MyWork   //</Link></li>
                <li><Link className='navBar_item' to='/Contact'>#Contact   //</Link></li>
            </ul>
        </nav>

    )
} 

export default NavBar