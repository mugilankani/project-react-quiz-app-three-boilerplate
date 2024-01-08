import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
       <div className='flexInHome'>
        <h1>Quiz</h1>
        <Link className='playBtn' to="/quiz">Play</Link>
        
      </div>
    </div>
  )
}
