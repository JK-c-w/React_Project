import { useState } from "react";
import Task from "./Components/Task";

import useTask, { TaskProvider } from "./Context";
import TaskList from "./Components/TaskList";
function App() {
  let[items,setItems]=useState([]);
  let [itemid,setid]=useState(0);
  const addTask=(newTask)=>{
       setItems((prev)=>[{id:itemid,task:newTask,completed:true},...prev]);
       setid((prev)=>prev+1)
  }
  const delTask=(id)=>{
      const updated=items.filter((t)=>t.id!==id);
      setItems(updated);
      console.log("jk");
  }
  const updateTask=(id,newTask)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? newTask : prevTodo )))
  }
  
  return (
          <TaskProvider value={{addTask,delTask,updateTask}}>
          <div className=' w-full h-screen text-center'>
          <div className='w-[500px] ml-[30%] mt-[5%] height-[500px] border-2 rounded-[5px]'>
         <h1 className=' text-green-500 font-extrabold text-[25px]'>ADD YOUR TASK </h1>  
          <Task/>
          </div>
          <div className="w-[500px] ml-[30%] mt-[2%] border-4 rounded-[5px]  ">
          {items.map((t,index)=>( 
            (t.completed)?
              <div key={t.id} className='flex ml-[20%] border-2 border-green-700 w-[350px] justify-between m-[1%]'>
               <TaskList t={t}/>
             </div>:''
          ))}
          </div></div> 
          </TaskProvider>
  )
}

export default App;
