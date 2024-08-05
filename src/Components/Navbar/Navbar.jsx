import React,{useEffect, useState} from 'react'
import './Navbar.css'
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-scroll';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [sticky])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    // 
    <nav className={`container ${sticky? "dark-nav": ""}`}>
        <span className='logo'><IoLogoJavascript /></span>
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={-250} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-250} duration={500} className='btn'>Contact us</Link></li>
        </ul>   
        <span className='menu-icon' onClick={toggleMenu}><TiThMenu size={22}/></span>
     </nav>
     
  )
}
 
export default Navbar