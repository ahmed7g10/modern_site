import React from 'react'
import "./company.css"
import google from"../../assest/svg/google.svg";
import slack from "../../assest/svg/slack.svg"
import atl from "../../assest/svg/atl.svg";
import dropbox from "../../assest/svg/dropbox.svg";
import shop from "../../assest/svg/shop.svg";
function Company() {
  return (
    <div className='container company__container'>
      <ul className="company__ul">
        <li><a href=""><img src={google} alt="" /></a></li>
        <li><a href=""><img src={slack} alt="" /></a></li>
        <li><a href=""><img src={atl} alt="" /></a></li>
        <li><a href=""><img src={dropbox} alt="" /></a></li>
        <li><a href=""><img src={shop} alt="" /></a></li>

      </ul>
    </div>
  )
}

export default Company
