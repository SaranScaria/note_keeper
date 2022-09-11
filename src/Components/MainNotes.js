import React from 'react'
import './MainNotes.css';

function MainNotes() {
  return (
    <div>
    <div className='Notes'>
      <img className='Notes_img' src="https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX" alt="" />
      <h1 className='tittle_notes'>Tittle</h1>
      <h2 className='date_notes'>Date:8/89/2004 <br />
                             Edit Date:1/12/2012</h2>
    </div>
    <div className='pagination'>
      <img className='pagination_img' src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/Output-Pagination-Edureka.png" alt="" />
    </div>
    </div>
  )
}

export default MainNotes
