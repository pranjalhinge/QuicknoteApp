import React from 'react'
import './show.css'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notedcom from './../../components/shownotecom/shownotecom'
function Show() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savednotes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(savednotes)
    setNotes(savednotes)
  }, []);
  return (
    <div>
      <div className='heading '>
        <Link to='./../'><h1> <FaHome className='home-icon' /></h1></Link>
        <h1 className='font-size font-center primary-color center'>Show Note📝</h1>
      </div>
      <div className='show-container-card'>
        {
          notes.map((note, index) => {
            const { title, description, category, emoji } = note;
            return (
              <div>
                <Notedcom title={title} description={description} category={category} emoji={emoji} index={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Show