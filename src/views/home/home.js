import React from 'react'
import  './home.css'
import collegenotes from './college notes.jpg'
import travelling from './travelling bag.avif'
import music from './music.avif'
import day from './day.avif'
import Featurecard from './../../components/featureCard/feature'
import { Link } from 'react-router-dom'
import Hovercard from './../../components/Hovercard/Hovercard'
import notebaground from './../../components/Hovercard/HoverImg/note baground.jpg'
import Img2 from './../../components/Hovercard/HoverImg/img add.jpg'
import Img3 from './../../components/Hovercard/HoverImg/note show.avif'
function home() {
  return (
    <div className='main-color home-container'>
        <h1 className='text-center pri-color font-style' >Quick Note</h1>
        <div className='fecard-container'>
        <Featurecard  featureImg={collegenotes}  featureDec='Remember the activites which we done' />
        <Featurecard featureImg={travelling} featureDec='travelling is a source of our power' />
        <Featurecard featureImg={music} featureDec='music change the mood of person' />
        <Featurecard featureImg={day} featureDec='our day will beautiful as we are' />
        </div>
        <div className='btn-container'>
          <Link to='/add'>  <Hovercard title={'Add Note'} imgchar={Img2}/> </Link>
          <Link to='/show'> <Hovercard title={'Show note'} imgchar={Img3}/> </Link>
           
        </div>
        
    </div>
  )
}

export default home