import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { actions, useStore } from '../store';

function Navbar() {
    const [state, dispatch] = useStore();
    const { toggle } = state;

    console.log('toggle: ', toggle);

    const handleToggle = () => {
        dispatch(actions.setToggle(!toggle))
    }
    return (
        <div className='navbar-wrapper'>
            <li className='navbar-item' onClick={handleToggle}>
                {
                    toggle ? <i class="fa fa-moon"></i> : <i class="fa fa-sun"></i>
                }
            </li>
            <ul className='navbar-list'>
                <li className='navbar-item' style={{ zIndex: 10 }}>
                    <Link to='/'><i class="fa fa-home" aria-hidden="true"></i></Link>
                    <span className='navbar-item--tag'><p className='navbar-item--text'>Home</p></span>
                </li>
                <li className='navbar-item'>
                    <Link to='/about'><i class="fa fa-user"></i></Link>
                    <span className='navbar-item--tag'><p className='navbar-item--text'>About</p></span>
                </li>
                <li className='navbar-item'>
                    <Link to='/portfolio'><i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
                    <span className='navbar-item--tag'><p className='navbar-item--text'>Portfolio</p></span>
                </li>
                <li className='navbar-item'>
                    <Link to='/contact'><i class="fa fa-envelope-open" aria-hidden="true"></i></Link>
                    <span className='navbar-item--tag'><p className='navbar-item--text'>Contact</p></span>
                </li>
            </ul>
        </div>
    )
}

export default Navbar