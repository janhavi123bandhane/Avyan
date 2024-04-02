import DivComponent from "./Components/ReUsableCompo/DivComponent";

function Testimonial(){
    return(
        <>
        <div className="flex flex-col bg-[#EDFFFF]  xl:w-full xl:h-[70rem] lg:w-[100rem] lg:h-[70rem] md:w-[90rem] md:h-[70rem] w-[60rem] h-[60rem]">
                <p className="md:text-8xl text-6xl text-center mt-32 font-oswald">TESTIMONIALS</p>
                <p className=" text-center text-3xl mt-24 font-Lato">At Avyaan Infrastructure,we seamlessly blend the art of construction with the finesse of interior 
           design. As a comprehensive construction and interior services provider, we pride ourselves on<br />
           delivering integrated solutions that bring architectural visions to life.From construction to<br /> </p>
          

           <div className=" flex flex-row justify-center mt-10 space-x-5">
              
               {/* first  */}
               <DivComponent 
               item1={"MR.ABHIJEET"}
               item2={"HOMEOWNER"}
               item3={"  Choosing Avyaan Infrastructure Real Estate Construction was one of the best decisions we made. Their team guided us through every step of the process, offering. valuable insights and ensuring our vision was realized We're grateful for their dedication and highly recommend Avyaan Infrastructure to anyone looking for a reliable and skilled construction partner."}
               >
               </DivComponent>
                 {/* 2nd  */}
                 
              <DivComponent 
               item1={"MRs.JANHAVI"}
               item2={"PROPERTY DEVELOPER"}
               item3={"  Working with Avyaan Infrastructure Real Estate Constructionwas an absolute pleasure. Their team demonstrated professionalism, expertise, and attention to detail throughout our project. They delivered exceptional results within the agreed timeline and budget. I highly recommend their services."}
               >
             </DivComponent>
           </div>
        
        
        </div>
        </>
    )
}
export default Testimonial;