import React from 'react'
import './Hovercard.css'
import Img1 from './HoverImg/note baground.jpg'
function hovercard({title,imgchar}) {
  return (
    <div className="shop-container">
      <a href="#" alt="note" target="_blank">
        <div className="card">
          <div className="wrapper">
            <img src={notebaground} className="cover-image"/>
          
          </div>
          {/* <img src={Img3} class="title"/> */}
          <h4 className='addnotes title'>{title}</h4> 
          <img src={notebagroundchar} className="character"/>
         </div>
      </a>
  </div>
  )
}

export default hovercard