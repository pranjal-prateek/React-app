import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login');
    }
    
  return (
    <nav>
        <span className='logo' onClick={scrollToTop}><i>Image Bucket</i></span>
        <ul >
            <li><Link to={'/getImages'} className='links'>Home</Link></li>
            <li><Link to={'/about'} className='links'>About</Link></li>
            <li><Link to={'/contact'} className='links'>Contact Us</Link></li>
            <li><button onClick={handleLogout} className='logoutbutton'>Logout</button></li>
        </ul>
    </nav>
      
  )
}

export default Navbar
