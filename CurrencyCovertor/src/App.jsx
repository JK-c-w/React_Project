import { useState } from 'react'

import './App.css'
import InputBox from './Components/InputBox'
import useCurr from './useCurr';

function App() {
  const state=useState();
  let[from,setfrom]=useState("usd");
  let [to,setTo]=useState("inr");
  let [amount,setamount]=useState(0);
  let [convertamount,setconvertamount]=useState(0);
  let curinfo=useCurr(from);
  let options=Object.keys(curinfo);

  let convert=()=>{
    setconvertamount(amount*curinfo[to]);
  }

  return (
    <div>
      <h1 className="text-[50px] text-orange-500">Currency Convertor</h1>
    <form onSubmit={(e)=>{
      e.preventDefault()
      convert()
    }}>
     <div> 
    <InputBox 
    label="from"
     currencyOptions={options}
     onchangeCurrency={(currency)=> setfrom(currency)}
     onchangeAmount={(amount)=>(setamount(amount))}
     selectedCurrency={from}
    />
    </div>
    <div> 
    <InputBox 
    label="To"
     currencyOptions={options}
     onchangeCurrency={(currency)=> setTo(currency)}
     amount={convertamount}
     amountDisabled
     selectedCurrency={to}
    />
    </div>
    <button type="submit" className='border-2 text-white'> CONVERT</button>
    </form>
    </div>
  )
}

export default App;
