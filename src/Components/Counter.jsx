import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment, incrementByAmount, reset} from '../redux/counterSlice'

export const Counter = () => {
  const [amount,setAmount]= useState(0)
  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.counterReducer)

  const handleIncrementAmount = ()=>{
    if(amount){
      dispatch(incrementByAmount(parseInt(amount)))
      amountContent.value=""
      setAmount(0)
    }
    else{
      alert("Please enter the amount to increment!!")
    }
  }
  return (
    <div style={{width:'600px'}} className='d-flex flex-column justify-content-center align-items-center border p-5 mt-5'>
        <h1>Counter App</h1>
        <h2 className='text-center' style={{fontSize:'80px'}}>{count}</h2>
        <div className="d-flex justify-content-between align-items-center mt-3 w-75">
            <button onClick={()=>dispatch(decrement())} className='btn-warning btn'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn-danger btn'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn-success btn'>INCREMENT</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
            <input id='amountContent' onChange={e=>setAmount(e.target.value)}  type="text" className='form-control' placeholder='Increment counter amount' />
            <button onClick={handleIncrementAmount} className='btn btn-primary ms-2'>INCREMENT</button>
        </div>
    </div>
  )
}
