import React, { useState } from 'react'
import { RiMenuAddLine } from '@remixicon/react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../State'
function Task() {
    let [task,setTask]=useState('');
    let dispatch=useDispatch();
    const change=(e)=>{
        setTask(e.target.value);
    }
    const handle=()=>{
        dispatch(addTodo(task));
        setTask('');
    }
    return (
        <div className='flex ml-[25%] border-2 border-slate-700 w-[250px] justify-between'>
            <input type='text' value={task} className='w-[200px] h-[25px] bg-[black] text-[white] focus: outline-none p-[1%]' onChange={change}/>
            <RiMenuAddLine size={20} color='blue' onClick={handle}/>
        </div> 

  )
}
export default Task;