import { useCallback, useEffect, useRef, useState } from "react";

function Passgen(){
    const state=useState;
    let[length,setlengh]=useState(8);
    let[password,setpassword]=useState("");
    let[numberallow,setnumallow]=useState(false);
    let[charallow,setcharallow]=useState(false);
    let Ref=useRef(null);
    let copy=useCallback(()=>{
        Ref.current?.select() ;
        Ref.current?.setSelectionRange(0,2);
        window.navigator.clipboard.writeText(password);
    },[password]);

     let passchange=useCallback(()=>{
           let pass="";
           let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
           if(numberallow)str+="0123456789";
           if(charallow)str+="!@#$%^&*()<>";
           for (let index = 0; index <length; index++) {
              const ind=Math.floor(Math.random()*str.length+1);
              pass+=str.charAt(ind);
           }
           setpassword(pass);
     },[length,numberallow,charallow,password])
     useEffect(()=>{
          passchange();
     },[length,numberallow,charallow,setpassword])

  return(
    <div className="bg-black w-full h-screen">
        <div className="relative">
            <h1 className=" text-white text-[50px] text-center">Password Genrator</h1>
            <div className="w-[400px] h-[300px] boder-4">
            <div className="absolute left-[40%] border-4 ">
                <input type="text" value={password} ref={Ref}></input>
                <button className="text-white" onClick={copy}>Copy</button>
            </div>
            <div className="absolute left-[40%] mt-[4%]">
                <input type="range" 
                defaultValue={length} 
                onChange={(e)=>{setlengh(e.target.value)}}
                min={8} max={12}></input>
                <label className="text-white">Length({length})</label>
            </div>
            <div className="absolute left-[40%] mt-[6%]">
                <input type="checkbox" defaultChecked={numberallow} onChange={()=>{setnumallow((prev)=>!prev)}}></input>
                <label className="text-white">NumberAllowed</label>
            </div>
            <div className="absolute left-[40%] mt-[8%]">
                <input type="checkbox" defaultChecked={charallow} onChange={(prev)=>{if(prev) setcharallow((prev)=>!prev)}}></input>
                <label className="text-white">CharAllowed</label>
            </div>
            </div>
        </div>

    </div>
  )
}
export default Passgen;