import React from 'react'
import './AddNotePage.css'
import {useNavigate} from 'react-router-dom'

function AddNotePage() {
  let navigate=useNavigate()
  return (
    <div>
      <div className='box'>
        <button className='close_button' onClick={()=>navigate('/')}>X</button>
        <img className='notepad' src="https://www.papertraildesign.com/wp-content/uploads/2021/01/Notes.jpg" alt="" />
        <button className='save'>SAVE</button>
        <button className='delete'>DELETE</button>
      </div>
    </div>
  )
}

export default AddNotePage
