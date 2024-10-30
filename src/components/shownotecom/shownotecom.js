import React from 'react'
import './shownotecom.css'
import { MdDelete } from "react-icons/md";
function deletNote(index){
  const savednotes = JSON.parse(localStorage.getItem("notes"))||[];
  savednotes.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(savednotes));
  window.location.reload();
}
function Category({category}) {
  const categoryemoji ={
    personal : "👤",
    work : "💼",
    learning : "📚" ,
    other : "🌐"
  }
  
  return (
    <div className={`card-category bg-${category}`}>
      <div className='category-emoji'>{categoryemoji[category]}</div>
      <div className='category-name'>{category}</div>
    </div>
  )
}
function shownotecom({title , description , category , emoji , index}) {

  return (
    <div className='show-card'>
       <div className='emoji-container'>{emoji}</div>
       <div>
        <h3 className='card-title'>{title}</h3>
        <p className='card-descri'>{description}</p>
       <Category category={category}/>
       <h2 className='delete-icon' onClick={()=>{
        deletNote(index)
       }}><MdDelete/></h2>
       </div>
    </div>
  )
}

export default shownotecom