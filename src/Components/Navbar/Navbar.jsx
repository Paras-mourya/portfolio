import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import useTheme from '../../contexts/Theme';

const Navbar=()=>{
    const {themeMode,lightTheme,darkTheme}=useTheme()
    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }
   
    const onchangeBtn=(e)=>{

        const darkModeStatus=e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
    return(
        <div className='navbar'>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
           
            <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
                <li><AnchorLink className="anchor-link" offset={50} href="#home" >Home</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about">About me</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services">Services</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work">Portfolio</AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
            </ul>
            <div className="nav-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
            </div>
            <div className="toggler">
  <label className="switch">
    <input
      type="checkbox"
      onChange={onchangeBtn}
      checked={themeMode === "dark"}
    />
    <span className="slider"></span>
  </label>
</div>

        </div>
    )
}
export default Navbar