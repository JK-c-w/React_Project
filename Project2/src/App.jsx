import { useEffect, useRef } from "react";
import Loader from "./Components/Loader";
import Page2 from "./Components/Page2";
import LocomotiveScroll from 'locomotive-scroll';
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";

const locomotiveScroll = new LocomotiveScroll();
function App(){
  return(
    <div className="w-full min-h-screen " >
    <Loader/> 
     <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    </div>
  )
}
export default App;