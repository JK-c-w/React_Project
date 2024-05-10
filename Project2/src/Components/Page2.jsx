import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
function Page2(){
    let a= new Array(1,2,3);
    useEffect(()=>{
    })
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="1"
             className="w-full h-[300px] bg-[#004d43] rounded-[10px] flex items-center absolute" >
                  <div className="flex  border-2 border-l-[#004d43] border-r-[#004d43] w-full h-[90%] inline-block whitespace-nowrap overflow-hidden relative">  
                 {a.map(()=>{
                    return(
                    <motion.h1 
                    initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear' ,duration:4,repeat:Infinity ,repeatType:"loop"}} 
                    className="move text-[200px] tracking-tighter inline-block font-extrabold  " >WE ARE THE BEST </motion.h1>)
                 })} 
                </div>   
            </div>
        </>
    )
}
export default Page2;