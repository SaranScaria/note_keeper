import React from 'react'
import './Home.css'; 
import NotesCard from '../Components/NotesCard';
import MainNotes from '../Components/MainNotes';
import {useNavigate} from 'react-router-dom'


function Home() {
  let navigate=useNavigate()
  return (
    <div className='main'>
      <div className='inner_box'>
        <div className='banner'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Notepad_icon.svg/768px-Notepad_icon.svg.png" alt="logo" />
        <h2 className='tittle'>Notes Keeper</h2>
        <button className='Add_Note_Button' src ="" onClick={()=>navigate('/add_notes')}>Add Notes</button>
        <img className='Add_note_icon' src="https://cdn-icons-png.flaticon.com/512/1091/1091585.png" alt="" />
        </div>
        <div className='bottom_side'>
            <div className='pinned_notes'>
              <NotesCard/>
            </div>
            <div className='Notes_div'>
              <img className='notes_heading_logo' src="https://thumbs.dreamstime.com/b/note-icon-vector-sign-symbol-isolated-white-background-note-logo-concept-note-icon-vector-isolated-white-background-134169208.jpg" alt="" />
              <h1 className='notes_heading'>Notes</h1>
              <MainNotes/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
