import React from 'react'
import "./blog.css"
import bigimg from "../../assest/svg/blog__big__imgg.svg"
import s1 from "../../assest/svg/small__card__img1.svg"
function Blog() {
  return (
    <div id='case' className='container blog__container'>
    <div>  <h1 >
      A lot is happening, 
      </h1>
      <h1>
      We are blogging about it.

      </h1>
    </div>
    <div className="blog__cards">
        <div className="blog__bigcard">
            <div className="blog__bigcard__img">
                <img src={bigimg} alt="" />
            </div>
            <div className="blog__bigcard__text">
               <div className="blog__bigcard__text__top">
               <small>Sep 26, 2021</small>
               <h3>
               GPT-3 and Open  
               AI is the future. Let us exlore how it is?
               </h3>
               </div>
               <small >Read Full Article</small>
            </div>
        </div>
        <div className="blog__small__cards">
            <div className="blog__small__card">
                <div className="blog__small__card__img">
                    <img src={s1} alt="" />
                </div>
                <div className="blog__small__card__text">
                    <div className="blog__small__card__text__top">
                        <small>Sep 26, 2021</small>
                        <h3>
                        GPT-3 and Open  
                        AI is the future. Let us exlore how it is?
                        </h3>
                        
                    </div>
                    <small >Read Full Article</small>

                </div>
            </div>

            <div className="blog__small__card">
                <div className="blog__small__card__img">
                    <img src={s1} alt="" />
                </div>
                <div className="blog__small__card__text">
                    <div className="blog__small__card__text__top">
                        <small>Sep 26, 2021</small>
                        <h3>
                        GPT-3 and Open  
                        AI is the future. Let us exlore how it is?
                        </h3>
                        
                    </div>
                    <small >Read Full Article</small>

                </div>
            </div>

            <div className="blog__small__card">
                <div className="blog__small__card__img">
                    <img src={s1} alt="" />
                </div>
                <div className="blog__small__card__text">
                    <div className="blog__small__card__text__top">
                        <small>Sep 26, 2021</small>
                        <h3>
                        GPT-3 and Open  
                        AI is the future. Let us exlore how it is?
                        </h3>
                        
                    </div>
                    <small >Read Full Article</small>

                </div>
            </div>

            <div className="blog__small__card">
                <div className="blog__small__card__img">
                    <img src={s1} alt="" />
                </div>
                <div className="blog__small__card__text">
                    <div className="blog__small__card__text__top">
                        <small>Sep 26, 2021</small>
                        <h3>
                        GPT-3 and Open  
                        AI is the future. Let us exlore how it is?
                        </h3>
                        
                    </div>
                    <small >Read Full Article</small>

                </div>
            </div>
        </div>    
    </div>        
    </div>
  )
}

export default Blog
