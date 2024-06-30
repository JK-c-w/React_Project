import React, { useState ,useEffect} from "react";
import axios from "axios";
import { filterAndSliceArticles } from "./FilterAndSlice";

function tech({items , change}){
  const ApiKey="151f8b3d30d8486a9a13cd644ca1d4bd";
  const state=useState();
  const [articles,setarticles]=useState([]);
  const [isloading,setIsLoading]=useState(true);
  
  const getData= async()=>{
    try{
    const res= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${items}&apiKey=${ApiKey}`)
    if (Array.isArray(res.data.articles)) {
      setarticles(res.data.articles);
   }
   else {
     console.log("res is not in array");
   }
    }
    catch(error){
       console.log("showing error",error);
    }
    finally {
     setIsLoading(false);
   }}

useEffect(()=>{
  getData();
},[items])
if (isloading) {
    return <div>Loading...</div>;
  }
  if(change){
    return(
     <div className="bg-[white] rounded-[10px] px-[40px] py-[10px] w-[100%]">
        <a className="text-[blue]">{items}</a>
        { filterAndSliceArticles(articles,10).map((item,index)=>{
          return(
            <>
          <p className="w-[100%] bg-[grey] h-[1px]"></p>
          <div className=" news flex h-[200px] my-[5px] " >  
         <div className="left  py-[10px] w-[80%] cursor-pointer">
             <div className="font-bold leading-1 cursor-pointer">
              <a href={`${item.url}`} target="_blank" className=":hover text-[black]">{item.title}</a>
             </div>
             <p className="text-[20px]">{item.description}</p>
             <p className="text-[10px] text-[grey] ">1 day ago</p>
         </div>
         <div className="w-[200px] h-[100px] bg-[black] translate-y-[20px]">
             <img className="text-[white]" src={`${item.urlToImage}`} alt=""></img>
         </div>
        </div>
        </>
        )})}
     </div>
    ) }
  else if(!change) {
      return(
        <div className="bg-[white] rounded-[10px] px-[20px] py-[10px] w-[100%]">
        <a className="text-[blue]">{items}</a>
        { filterAndSliceArticles(articles,3).map((item,index)=>{
          return(
            <>
          <p className="w-[100%] bg-[grey] h-[1px]"></p>
          <div className=" news flex h-[200px] my-[5px] " >  
         <div className="left  py-[10px] w-[200px] cursor-pointer justify-center">
             <div className="font-bold leading-1 cursor-pointer">
              <a href={`${item.url}`} target="_blank" className=":hover text-[black]">{item.title}</a>
             </div>
             <p className="text-[10px] text-[grey] ">1 day ago</p>
         </div>
         <div className="w-[100px] h-[50px] bg-[black] translate-y-[20px]">
             <img src={`${item.urlToImage}`} alt=""></img>
         </div>
        </div>
        </>
        )})}
     </div>
    )
    }
}
export default tech;