
import { useEffect, useRef, useState } from "react";
function Page4(){
    let [rotate,setrotate]=useState(0);
      useEffect(()=>{
         window.addEventListener("mousemove",(e)=>{
             let X=e.clientX;
             let Y=e.clientY;
             
             let deltaX=X-window.innerWidth/2;
             let deltaY=Y-window.innerHeight/2;
             let angle= Math.atan2(deltaY,deltaX)*(180/Math.PI);
             setrotate(angle-180);
         })
      })
     
   return(
    <div >
         <div data-scroll data-scroll-section data-speed="-.4"
         className=" relative">
            <img className="" 
            src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"/>
            <div  
            className=" flex justify-between w-[500px] h-[200px] absolute  top-[10%] translate-x-[60%] translate-y-[70%]">
                <div className="w-[200px] h-[200px] rounded-full bg-white">
                    <div  className="w-[115px] h-[115px] rounded-full bg-black absolute translate-x-[35%] translate-y-[35%] ">
                        <h1 className=" absolute text-white top-[40%] left-[40%] font-bold">PLAY</h1>
                        <div style={{transform:`rotate(${rotate}deg)`}}                       
                        className={` w-[100%] h-[5%] absolute top-[50%]`}>
                            <div className="bg-white rounded-full w-[10px] h-[10px] absolute text-white  "></div>
                        </div>
                        </div></div>
            <div className="w-[200px] h-[200px] rounded-full bg-white">
                    <div className="w-[115px] h-[115px] rounded-full bg-black absolute translate-x-[35%] translate-y-[35%]">
                        <h1 className=" absolute text-white top-[40%] left-[40%] font-bold">PLAY</h1>
                         <div style={{transform:`rotate(${rotate}deg)`}}
                          className="w-[100%] h-[5%] absolute top-[50%] rotate-1">
                    <div className="bg-white rounded-full w-[10px] h-[10px] absolute text-white "></div></div>
                    </div>
                    </div>
           </div> 
           </div>
         </div>
   )
}
export default Page4;