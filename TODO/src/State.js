import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todoList:[{id:'1',content:''}]
}
const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                content:action.payload
            }
            state.todoList.push(todo)
        },
        delTodo:(state,action)=>{
            state.todoList=state.todoList.filter((todo)=>todo.id!=action.payload);
        }
    }
})

export const {addTodo,delTodo}=todoSlice.actions

export default  todoSlice.reducer;