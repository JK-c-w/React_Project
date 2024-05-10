import Photo from "./Photo";
function Page3(){
    return (
        <div  
        data-scroll data-scroll-section data-scroll-speed=".1"
        className="w-full min-h-screen bg-[#cdea68]  ">
            <div className="pt-20 pl-5">
                <h1 className=" text-[50px] text-left leading-[55px] cursor-pointer ">
                    Ochi is a strategic partner for fast-grow­ing tech bussiness that need to 
                 <u className="  underline-offset-8 decoration-2 decoration-black"> raise funds</u>, sell products ,
                 <u className=" underline-offset-[13px] decoration-2 decoration-black">explain complex ideas,</u>
                 and hire great people.    
                </h1>
            </div>
            <div className="w-full h-[1px] bg-black mt-[60px]"></div>
            <div className="flex justify-between p-4 ">
                 <p>What you can expect:</p>
                 <div className="flex flex-col gap-3">
                    <p>We create tailored presentations to help<br/> you persuade your colleagues, clients, or <br/>investors. Whether it’s live or digital,<br/> delivered for one or a hundred people.</p>
                    <p>We believe the mix of strategy and<br/> design (with a bit of coffee) is what<br/> makes your message clear, convincing,<br/> and captivating.</p>
                 </div>
                 <div >
                    <u>S:</u><br/>
                    <a>Instragram</a><br/>
                    <a>Facebook</a><br/>
                    <a>Linkedin</a><br/>
                    <a>GitHub</a>
                 </div>
            </div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="p-5">
              <Photo/>
            </div>
        </div>
    )
}
export default Page3;