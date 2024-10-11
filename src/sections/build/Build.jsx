import React from 'react'
import "./build.css"
import right from "../../assest/svg/face.svg"
import photo from "../../assest/svg/photos.svg"
function Build() {
  return (
    <div id='home' className='container build__container'>
      <div className="build__left">
        <h1>Let’s Build Something
amazing with GPT-3
OpenAI</h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing
        . Not thoughts all exercise blessing. Indulgence way everything 
        joy alteration boisterous the attachment. Part
        y we years to order allow asked of.
        </p>
        <div className="build__form">
          <input type="text" placeholder='Your Email Address' />
          <a href="#" className='btn primary'>Get Started</a>
        </div>
        <div className="build__person">
          <img src={photo} alt="" />
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>
      <div className="build__right">
          <img src={right} alt="" />
      </div>
      
    </div>
  )
}

export default Build
