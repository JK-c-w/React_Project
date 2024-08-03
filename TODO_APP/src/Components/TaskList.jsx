import React, { useState } from 'react'
import {RiDeleteBin6Line} from '@remixicon/react';
import { RiPencilFill } from '@remixicon/react';
import { RiSaveLine } from '@remixicon/react';
import useTask from '../Context';
function TaskList({t}) {
  let {delTask,updateTask}=useTask();
  let [editable,seteditable]=useState(false);
  let [pen,setpen]=useState(true);
  let [comp,setcomp]=useState(false);
  let [msg,setmsg]=useState(t.task)
  const edit=()=>{
    seteditable(true)
    setpen(false);
  }
  const handlechange=(e)=>{
     setmsg(e.target.value);
  }
  const saved=(e)=>{
    seteditable((prev)=>!prev)
    setpen(true);
    updateTask(e.target.id,msg)

  }
  return (
    <>
       <input type='text' value={msg} readOnly={editable?false:true} onChange={handlechange}
        className='w-[200px] h-[25px] bg-[black] text-[white] font-bold focus: outline-none p-[1%]'/>
       <div className='flex  p-[1%]'>
        
       {pen?
       <RiPencilFill size={20} color='green' className='hover:text-[#0ff562]' onClick={edit}></RiPencilFill>:
       <RiSaveLine size={20} color='green' id={t.id} className='hover:text-[#0ff562]' onClick={saved}></RiSaveLine>}
       <RiDeleteBin6Line size={20} id={t.id} color='red' className=" hover:text-[#eb0c0c]" onClick={()=>delTask(t.id)} />
       </div>
    </>
  )
}

export default TaskList