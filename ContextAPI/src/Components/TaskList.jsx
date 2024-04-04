import React from 'react'
import {RiDeleteBin6Line} from '@remixicon/react';
import { RiPencilFill } from '@remixicon/react';
import useTask from '../Context';
function TaskList({t}) {
  let {delTask}=useTask();
  return (
    <>
       <input type='text' value={t.task} className='w-[200px] h-[25px] focus: outline-none p-[1%]'/>
       <div className='flex  p-[1%]'>
       <RiPencilFill size={20} className='hover:text-[#0ff562]'></RiPencilFill>
       <RiDeleteBin6Line size={20} id={t.id} className=" hover:text-[#eb0c0c]" onClick={()=>delTask(t.id)} />
       </div>
    </>
  )
}

export default TaskList