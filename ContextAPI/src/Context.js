import { createContext, useContext } from "react";

const Mycontext = createContext({
    items:[{
        id:1,
        task:"new msg",
        complited:false
    }],
    addTask:(newTask)=>{},
    delTask:(id)=>{},
    updateTask:(id,newTask)=>{},
})
export const TaskProvider =Mycontext.Provider;
export default function useTask(){
     return useContext(Mycontext);
}