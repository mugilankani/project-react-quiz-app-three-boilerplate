import React from 'react'
import array from './arr'
import { Link } from 'react-router-dom'
export default function Quiz({handleAnswer,value ,handleChangeAdd,handleChangeSub}) {
    console.log(array[value].question)
    return (
    <div className='flexInHome'>
      <div className='quizBox'>
        <h1>Questions</h1>
        <h2 className='optionsOfQuestion'> {value + 1} of 5</h2>
        <h1>{array[value].question}</h1>
        <div className='optionButton'>
            <button onClick={() => handleAnswer(array[value].optionA)}>{array[value].optionA}</button>
            <button onClick={() => handleAnswer(array[value].optionB)}>{array[value].optionB}</button>
            <button onClick={() => handleAnswer(array[value].optionC)}>{array[value].optionC}</button>
            <button onClick={() => handleAnswer(array[value].optionD)}>{array[value].optionD}</button>
        </div>
        <div className='nextButton'>
            <button onClick={handleChangeAdd} className='next'>Next</button>
            <button onClick={handleChangeSub} className='previous'>Previous</button>
            <Link className='quit' to="/">Quit</Link>

            <Link className='result' to="/result">Result</Link>
        </div>
      </div>
    </div>
  )
}
