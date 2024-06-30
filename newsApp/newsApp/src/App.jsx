import React, { useEffect } from "react";
import Nav from "./Components/Nav"
// import Type from "./Components/Types"
// import News from "./Components/news"
import Provider from "./Components/Provider";
import axios from "axios";

function App(){
  return(
    <div className="w-full minh-screen pb-[20px] bg-[#efefef]">
      <Nav/>
      <Provider/>
    </div>
  );
}

export default App;
