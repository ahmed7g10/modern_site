import React from 'react'
import "./footer.css"
import logo from "../../assest/svg/footer__logo.svg"
function Footer() {
  return (
    <footer>
        <div className='container footer__container'>
        <div className="footer__top">
            <h1>
            Do you want to step in to the future before others
            </h1>
            <a href="#" className='btn'>Request Early Access</a>
        </div>
       
        <div className="footer__bottom">
            <div className="footer__part1">
                <img src={logo} alt="logo" />
                <p>
                    <small>
                    Crechterwoord K12 182 DK Alknjkcb, 
                    All Rights Reserved
                    </small>
                </p>
            </div>
            <div></div>
            <div className="footer__part2">
                <h6 style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                Links
                </h6>
                <ul>
                    <li><a href="#">Overons</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="$">Counters</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer__part2">
                <h6 style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                Company
                </h6>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="$">Contact</a></li>
                </ul>
            </div>


            <div className="footer__part2">
                <h6 style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                Get in touch
                </h6>
                <ul>
                    <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li><a href="#">085-132567</a></li>
                    <li><a href="$">info@payme.net</a></li>
                </ul>
            </div>

        </div>
    </div>
    <small>© 2024 GPT-3. All rights reserved.</small>
    </footer>
  )
}

export default Footer
