import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assest/svg/header_logo.svg"
import { IoMenu } from "react-icons/io5";
import Moble from '../moble';

function Navbar() {
  const [show,setshow]=useState(false);
  const [active,setactive] = useState("#home");
  return (
    <>
     <div className='container nav__container'>
        <div className="nav__left">
            <div className="nav__logo">
                <img src={logo} alt="" />
            </div>
            <nav>
              <ul className="header__nav">
              <li onClick={() => { setactive("#home"); }} id={active === "#home" ? "active_li_big" : ""}>
    <a href="#home">Home</a>
</li>
<li onClick={() => { setactive("#what"); }} id={active === "#what" ? "active_li_big" : ""}>
    <a href="#what">What is GPT?</a>
</li>
<li onClick={() => { setactive("#open"); }} id={active === "#open" ? "active_li_big" : ""}>
    <a href="#open">Open AI</a>
</li>
<li onClick={() => { setactive("#case"); }} id={active === "#case" ? "active_li_big" : ""}>
    <a href="#case">Case Studies</a>
</li>
<li onClick={() => { setactive("#lib"); }} id={active === "#lib" ? "active_li_big" : ""}>
    <a href="#lib">Library</a>
</li>

              </ul>
            </nav>
        
        </div>
        
        <div className="nav__mobile">
              <IoMenu active={active} setactive={setactive} className='icon' onClick={()=>{
                setshow(!show)
              }} />
            </div>
        <div className="nav__right">
            <a href="#" className="btn">Sign in</a>
            <a href="#" className="btn primary">Sign up</a>
        </div>
    </div>
    {
  show&&<Moble/>
 }
    </>
   
  )
}

export default Navbar
