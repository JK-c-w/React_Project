import { useState } from 'react'
import './App.css'
import Task from './Components/Task'
import TaskList from './Components/TaskList'

function App() {
  return (
    <>
       <div className=' w-full h-screen text-center'>
      <div className='w-[500px] ml-[30%] mt-[5%] height-[500px] border-2 rounded-[5px]'>
        <h1 className=' text-green-500 font-extrabold text-[25px]'>ADD YOUR TASK </h1>  
    <Task/>
    </div>
    <div className="w-[500px] ml-[30%] mt-[2%] border-4 rounded-[5px]  ">
      <TaskList/>
      </div>
 
    </div>
    </>
  )
}

export default App
