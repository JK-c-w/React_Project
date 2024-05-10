import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
    let Todolist=useSelector(state=>state.todoList);
    console.log(Todolist);
  return (
      <>
      {Todolist.map((t,index)=>( 
              <div key={t.id} className='flex ml-[20%] border-2 border-green-700 w-[350px] justify-between m-[1%]'>
              <input type='text' value={t.content} 
              className='w-[200px] h-[25px] bg-[black] text-[white] font-bold focus: outline-none p-[1%]'/>
             <div className='flex  p-[1%]'>
        
       {/* <RiPencilFill size={20} color='green' className='hover:text-[#0ff562]' onClick={edit}></RiPencilFill>: */}
       {/* <RiSaveLine size={20} color='green' id={t.id} className='hover:text-[#0ff562]' onClick={saved}></RiSaveLine>} */}
       {/* <RiDeleteBin6Line size={20} id={t.id} color='red' className=" hover:text-[#eb0c0c]" onClick={handle} /> */}
       </div>
       </div>
          ))}
      </>
  )
}

export default TaskList