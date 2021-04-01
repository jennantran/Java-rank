import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends React.Component {
    render(){
      return (
        <nav className='nav'>
            <ul> 
                <Link to='/search'
                      className='.navLinks'
                    >
                    <li>Search</li>
                </Link>
                <Link to='/rate'
                     className='.navLinks'>
                    <li>Rate Drinks</li>
                </Link>
                <Link to='/popular'
                    className='.navLinks'
                    >  
                    <li>Most Popular</li>
                </Link>
                <Link to='/login'
                    className='.navLinks'
                    >  
                    <li>Log in</li>
                </Link>
                <Link to='/signup'
                     className='.navLinks'
                     >  
                    <li>Sign up</li>
                </Link>
            </ul>
        </nav>
      );
    }
  }
  
  export default Nav;