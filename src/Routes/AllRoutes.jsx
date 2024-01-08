import React from 'react'

import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Result from '../Components/Result';
import Quiz from '../Components/Quiz';
import { useState } from 'react';
import arr from '../Components/arr';

const AllRoutes = () => {


  const [value , setValue] = useState(0)
  const [score , setScore] = useState(0)
  const [result ,setResult] = useState(false)


  const handleChangeAdd = () => {
    if(value == arr.length-1){
      setValue(0)
      console.log("hi")
      setResult(true)
    }else{
      
      setValue(value + 1)
      console.log("hi")
    }
  }
  
  const handleChangeSub = () => {
    if(value == 0){
      console.log("hi")
      setValue(arr.length -1)
    }else{
      console.log("hi")

      setValue(value - 1)
    }
    
  }
  const handleScore = (ans) => {
    if(arr[value].answer == ans){
      setScore(score +1)
      alert('Corrcet answer')
      console.log("correct")
      if(value == arr.length-1){
        setResult(true)
      }else{
        
        setValue(value + 1)
        console.log("hi")
      }

    }
    else{
      alert('wrong answer')
      if(value == arr.length-1){
        setValue(0)
        setResult(true)
        console.log("hi")
      }else{
        
        setValue(value + 1)
        console.log("hi")
      }

    }
  }
  if(result){
    return < Result  score={score} value={value+1} totalQue={arr.length} />
  }


  return (
    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/result' element={<Result score={score} value={value} totalQue={arr.length} />} />
      <Route path='/quiz' element={<Quiz handleAnswer={handleScore} value={value} handleChangeAdd={handleChangeAdd} handleChangeSub={handleChangeSub} />} />
      <Route path='*' element={<Home  />} />
    </Routes>
  )
}

export default AllRoutes
