import React from 'react'
import './NotesCard.css'; 

function NotesCard() {
  return (
    <div className="card_body">
        <img className='card_img' src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp" alt="" />
        <h1 className='tittle_card'>Tittle</h1>
        <h2 className='date'>Date:8/89/2004 <br />
                             Edit Date:1/12/2012</h2>
      <img className='card_pin' src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48706/round-pushpin-emoji-clipart-md.png" alt="" />
      
    </div>
  )
}

export default NotesCard
