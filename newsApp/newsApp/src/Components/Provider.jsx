import React, { useState } from "react";
import { Mycontext } from "./Mycontext";
import Types from "./Types";
import News from "./news";

function Provider(){
    let state=useState()
    const [category, setCategory] = useState("");
    const [change,setchange]=useState(false);
    return(
         <Mycontext.Provider value={{category,setCategory ,change,setchange}}>
            <Types/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <News/>
         </Mycontext.Provider>
    )
}
export default Provider;
