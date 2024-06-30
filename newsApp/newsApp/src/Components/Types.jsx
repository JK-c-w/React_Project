import React, { useContext } from "react";
import { Mycontext } from "./Mycontext";

function Types(){
    const {category,setCategory}=useContext(Mycontext);
    const {change,setchange}=useContext(Mycontext)
    let arr={
        Business:"orange",
        Entertainment:"#4cb5f9",
        Technology:"#eae868",
        Sports:"#ecacf5",
        Health:"#aceef5"
    }
    const itemChange=(item)=>{
        console.log(item);
        setCategory(item);
        setchange(true);
    }
 return(
    <div className=" w-full h-[10%] py-[20px]">
        <div className="flex w-full justify-center gap-[5px] ">
        { Object.keys(arr).map((item,i)=>
        <div className= "h-[25px]  px-[20px] rounded-[10px] hover:translate-y-[-5px] cursor-pointer " 
        style={{backgroundColor:`${arr[item]}`}}
         key={item} 
         onClick={()=>itemChange(item)}>
            {item}
        </div>
        )}
        </div>
</div>
)
}

export default Types;