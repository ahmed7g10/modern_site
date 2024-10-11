import React from 'react'
import "./access.css"
import img from "../../assest/svg/futureimg.svg"
function Access() {
  return (
    <div className='container access__container'>
      <div className="access__left">
        <img src={img} alt="" />
      </div>
      <div className="access__right">
        <a href="#" className="orange__a blue__a">
        Request Early Access to Get Started
        </a>
        <h2>
        The possibilities are beyond your imagination
        </h2>
        <p>

        Yet bed any for travelling assistance
         indulgence unpleasing. Not thoughts all
          exercise blessing. Indulgence way everything j
          oy alteration boisterous the attachment. Party we 
          years to order allow asked of.
        </p>
        <a href="" className="orange__a">
            Request Early Access to Get Started
        </a>
      </div>
    </div>
  )
}

export default Access
