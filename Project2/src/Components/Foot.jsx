function Foot(props){
    const a= new Array("For Public and Private Companies","From the first pitch to IPO",);
    return (
        
        <div id={props.id} className="flex bg-blue-300 w-full border-2 border-l-blue-300 border-r-blue-300 border-b-blue-300 pt-[35px] justify-between items-center">
           { a.map((i)=>{
            return(<p>{i}</p>)
           })}
           <p className="border-2 h-[20%] rounded-[20px] px-[10px] py-[5px]">START THE PROJECTS</p>
        </div>
    )
}
export default Foot;