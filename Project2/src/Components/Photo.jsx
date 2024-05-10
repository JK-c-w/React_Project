import { useEffect, useState } from "react";
import gsap from "gsap";

function Photo(){
    const state=useState();
     let [ani,setani]=useState(false);
     useEffect(()=>{
        let tl= gsap.timeline();
         if(ani===true){
            tl.to('.dot',{
                scale:'2',
                duration:0.1
            })
            tl.to('.image',{
                scale:'0.9',
                duration:0.3
            })}
            else{
                tl.to('.dot',{
                    scale:'1',
                    duration:0.1
                })
                tl.to('.image',{
                    scale:'1',
                    duration:0.3
                }) 
            }
     })
     let change=()=>{
         setani(true);
     }  
     let changeA=()=>{
         setani(false);
     }  


    return(
         <div className="flex justify-between">
             <div >
                <h1 className="text-[40px] tracking-tighter">Our approch:</h1>
                <h3 onMouseEnter={change} onMouseLeave={changeA}
                className={`-[180px] h-[50px] bg-[#212121]  rounded-[20px] text-white font-bold flex items-center justify-center gap-5`}>READ MORE<div className={` dot bg-white rounded-full w-[10px] h-[10px]  `}></div></h3>
             </div>
             <div>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
                className={` image h-[350px] overflow-hidden rounded-[10px] w-[520px] scale-100 `}
                ></img>
             </div>
         </div>
    )
};
export default Photo;