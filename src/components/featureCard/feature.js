import React from 'react'
import './feature.css'
function feature({featureImg , featureDec}) {
  return (
    <div className='feature-card'>
        <img src={featureImg}  alt='img-feature' className='feature-img'/>
        <p className='desc'>{featureDec}</p>
    </div>
  )
}

export default feature