import React from 'react';
import { useState } from 'react';
const Moble = () => {
    const [active,setactive] = useState("#home");
    return (
        <div >
        <ul className="small__menu">
        <li href="#home" onClick={() => { setactive("#home"); }} className={active === "#home" ? "active_li" : ""}>
    <a href="#home">Home</a>
</li>
<li href="#what" onClick={() => { setactive("#what"); }} className={active === "#what" ? "active_li" : ""}>
    <a href="#what">What is GPT?</a>
</li>
<li  href="#open" onClick={() => { setactive("#open"); }} className={active === "#open" ? "active_li" : ""}>
    <a href="#open">Open AI</a>
</li>
<li  href="#case" onClick={() => { setactive("#case"); }} className={active === "#case" ? "active_li" : ""}>
    <a href="#case">Case Studies</a>
</li>
<li onClick={() => { setactive("#lib"); }} className={active === "#lib" ? "active_li" : ""}>
    <a href="#lib">Library</a>
</li>

             <li>            <a href="#" className="btn">Sign in</a>
             </li>
             <li> <a href="#" className="btn primary">Sign up</a>
             </li>
           </ul>
        </div>
    );
}

export default Moble;
