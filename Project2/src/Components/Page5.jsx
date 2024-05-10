import { motion } from "framer-motion";
import { useState } from "react";
import { Power4 } from "gsap";
function Page5(){
  const state=useState();
  let[hoverF,setF]=useState(false);
  let[hoverV,setV]=useState(false);
    return (
        <div className="w-full min-h-screen bg-[#5f9ea0] pt-[5%]">
            <div className="w-[100%] h-[100%] border-2 border-l-[#5f9ea0] border-r-[#5f9ea0] border-t-[#5f9ea0]">
            <h1 className="text-[40px] px-[2%]">Featured Projects</h1>
            </div>
            <div>
                <div className="relative flex  p-[2%] ">
                    <div className=" w-[600px] h-[500px]" 
                    onMouseEnter={()=>setF(true)} onMouseLeave={()=>setF(false)}>
                    <motion.img 
                    initial={{scale:1}} animate={hoverF?{scale:0.9}:{scale:1}}
                    transition={{ease:Power4.easeInOut} }
                    className=" w-[100%] h-[100%] rounded-[20px] overflow-hidden z-9" 
                     src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></motion.img>
                     <div className="absolute  top-[45%] left-[40%]  translate-x-1/2 translate-y-1/2 text-[80px]  text-yellow-300 ">
                       <h1 className="absolute flex text-yellow-300 overflow-hidden z-10"> 
                        {'FLYDE'.split("").map((item,index)=>{
                              return(<motion.span initial={{y:'100%'}} animate={hoverF?{y:'0%'}:{y:'100%'}} 
                                    transition={{ease:Power4.easeIn,delay:index*.1}}
                                className="inline-block">{item}</motion.span>)
                        })}
                        </h1>
                     </div>
                     </div>
                     <div className=" w-[600px] ml-[1%] h-[500px]"
                       onMouseEnter={()=>setV(true)} onMouseLeave={()=>setV(false)}>
                    <motion.img
                     initial={{scale:1}} animate={hoverV?{scale:0.9}:{scale:1}}
                     transition={{ease:Power4.easeInOut}}
                    className=" w-[100%] h-[100%] rounded-[20px] z-9" 
                     src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></motion.img>
                    <div className="absolute top-[45%] left-[43%]  translate-x-1/2 translate-y-1/2 bg-pink-400 text-[80px] text-yellow-300">
                        <h1 className="absolute flex text-yellow-300 overflow-hidden z-10">
                            {'VISE'.split("").map((item,index)=>{
                                return(<motion.span initial={{y:'100%'}} animate={hoverV?{y:'0%'}:{y:'100%'}}
                                  transition={{ease:Power4.easeInOut,delay:index*.1}}
                                  className="iniline-block">{item}</motion.span>)
                            })}
                        </h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page5;

