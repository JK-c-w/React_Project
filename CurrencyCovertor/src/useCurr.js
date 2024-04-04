import {useEffect, useState} from 'react';
//CUSTOME HOOKS


function useCurr(currency){
   let state=useState();
   let[data,setdata]=useState({});
  useEffect(()=>{
  fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
  .then((res)=>res.json())
  .then((res)=>setdata(res[currency]))
  },[currency]) 
  return data; 
}
export default useCurr;