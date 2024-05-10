
function Nav(props){
    var  bar=new Array('Services','Our Work','About Us','Insights','Contact')
    return (
        <div className=" hidden flex items-center gap-[40px] mr-[40px] " id={props.id}>
          {bar.map((items,i)=>(
            <h2 className="text-[20px] font-light " key={i}>{items}</h2>
          ))
          }
        </div>
    )
}
export default Nav;