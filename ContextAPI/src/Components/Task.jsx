import React, { useState } from 'react';
import { RiMenuAddLine } from '@remixicon/react';
import useTask from '../Context';
function Task() {
  let{addTask}=useTask();
  let [Task,setTask]=useState('');
  let change=(e)=>setTask(e.target.value);
  let add=()=>{
    addTask(Task)
    setTask("");
  }
    return (
        <div className='flex ml-[25%] border-2 border-slate-700 w-[250px] justify-between'>
            <input type='text' value={Task} className='w-[200px] h-[25px] focus: outline-none p-[1%]' onChange={change}/>
            <RiMenuAddLine size={20} onClick={add}/>
        </div> 

  )
}

export default Task;