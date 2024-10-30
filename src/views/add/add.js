import React, { useState } from 'react'
import './add.css'
import { FaHome } from "react-icons/fa";
import {  Link } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import {toast} from 'react-hot-toast';
function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('');
  const [category, setCategory] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(false);

 const addnotes = () => {
    const note = JSON.parse(localStorage.getItem("notes"))||[];
    const noteObject ={
      title,
      description,
      category,
      emoji,
    };
    note.push(noteObject);
    localStorage.setItem("notes" , JSON.stringify(note));

    toast.success("Note  added successfully!")
    setTitle("")
    setCategory("")
    setEmoji("")
    setDescription("")
 }
  
  return (
    <div>
      <div className='heading '>
        <Link to='./../'><h1> <FaHome className='home-icon' /></h1></Link>
        <h1 className='font-size font-center primary-color center'>Add Note</h1>
      </div>
      <div className='input-container'>
        <input type='text' placeholder='Title' className='title-input iput'
          value={title} onChange={
            (e) => setTitle(e.target.value)
          } />
        <input type='text' placeholder='Description' className='title-input iput' value={description} onChange={(e) => setDescription(e.target.value)} />

        <select value={category}
          onChange={(e) => { setCategory(e.target.value) }
          } className='iput'>
          <option value=''>Select Category</option>
          <option value='personal'>Personal</option>
          <option value='work'>Work</option>
          <option value='learning'>Learning</option>
          <option value='family'>Family</option>
          <option value='others'>Others</option>
        </select>
        
      </div>
      <div className='emoji-box' onClick={() => {
        setSelectedEmoji(true)
      }}>
      {emoji? emoji :'Select your emoji'}
      </div>
      <EmojiPicker height={'300px'} width={'400px'} skinTonesDisabled={true} open={selectedEmoji} onEmojiClick={(emojiObject) => {
        setEmoji(emojiObject.emoji)
        setSelectedEmoji(false)
      }} className='emoji-picker' />

     

      <button className='btns addbtn' type='submit' onClick={addnotes} >Add Note</button>
    </div>
  )
}

export default Add