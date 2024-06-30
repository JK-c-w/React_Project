import React, { useContext, useEffect, useState } from "react";
import Tech from "./tech";
import { Mycontext } from "./Mycontext";


function news(){
  let state=useState();
  let{category,setCategory}=useContext(Mycontext);
  let {change,setchange}=useContext(Mycontext);
    let arr= ["Technology","Business","Health"];
    if(!change){
    return (
       <div className="w-[100%] flex justify-center gap-[20px] px-[20%]">
        {arr.map((items,index)=>
          <Tech 
          items={items}
          change={change} 
          />
        )}
       </div>
    );}
    else {
      return(
      <div className="w-[100%]">
           <Tech 
          items={category}
          change={change} 
          />
      </div>
      )
    }
  }
export default news;