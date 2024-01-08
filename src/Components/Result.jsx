import React from 'react'
import arr from '../Components/arr'

export default function Result({value , score , totalQue}) {
    console.log(value)
    console.log('value:', value);
    console.log('score:', score);
    console.log('arr.length:', arr.length);
    return (
    <div className='background'>
      <div className='resultBox'>
        <div >
        <h1>You Score</h1>
        
            
        </div>
        <div className='divbox'> 
        <h1>Total number of question</h1>
        <h1>{arr.length}</h1>
        </div>
        <div className='divbox'>
        <h1>No of correct question</h1>
        <h1>{score}</h1>

        </div>
        <div className='divbox'>
        <h1>No of wrong question</h1>
        <h1>{(value) -score}</h1>

        </div>
        <div className='divbox'>
        <h1>No of attumpted question</h1>
        <h1>{value }</h1>

        </div>

        
      </div>
    </div>
  )
}
