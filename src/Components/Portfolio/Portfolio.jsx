import ImageComponent from '../ReUsableCompo/ImageComponent'
import Img2 from '/images/image2.jpg'
import Img3 from '/images/image3.jpg'
import Img4 from '/images/image4.jpg'
import Img5 from '/images/image5.jpg'
function Portfolio(){
 
    return(
    <>
  <div className="flex flex-col  justify-center bg-[#EDFFFF]  xl:w-full xl:h-full lg:w-[100rem] lg:h-full md:w-[90rem] md:h-full w-[60rem] h-full">
       <div>  
            <div>
               <p className="md:text-8xl text-6xl text-center mt-32 font-oswald">OUR PORTFOLIO</p>
               <p className="text-[#003A47] text-center mt-8 lg:text-3xl md:text-3xl font-Roboto">EXPERIENCE OUR WORK</p>
           </div>
           {/* 1st two img */}
           <div className="flex flex-row justify-center mt-36 space-x-9">
                <div>
                   <ImageComponent 
                   imageUrl={Img2}
                   ></ImageComponent>
                    <p className="text-center text-[#003A47] md:text-5xl text-[1.2rem] mt-8 font-Rosarvio">New Central Mall</p>
                    <p className="text-center text-[#003A47] mt-4 text-3xl">Indore, India</p>
               </div>

               <div>
                  <ImageComponent
                  imageUrl={Img3}
                  ></ImageComponent>
                   <p className="text-center text-[#003A47] md:text-5xl text-[1.2rem] mt-8 font-Rosarvio">City Shopping Complex</p>
                   <p className="text-center text-[#003A47] mt-4 text-3xl">Banglore, India</p>
               </div>

            </div>      
     </div>
     {/* 2nd two img */}
     <div>
         
           <div className="flex flex-row justify-center mt-36 space-x-9">
           
               <div>
                 <ImageComponent
                 imageUrl={Img4}
                 ></ImageComponent>
                  <p className="text-center text-[#003A47] md:text-5xl text-[1.2rem] mt-8 font-Rosarvio">New Central Mall</p>
                  <p className="text-center text-[#003A47] mt-6 text-3xl">Indore, India</p>
               </div>

               <div className="mb-20">
                 <ImageComponent
                 imageUrl={Img5}
                 ></ImageComponent>
                 <p className="text-center text-[#003A47] md:text-5xl text-[1.2rem] mt-8 font-Rosarvio">City Shopping Complex</p>
                 <p className="text-center text-[#003A47] mt-6 text-3xl">Banglore, India</p>
              </div>
             
           </div>
    </div>      
</div>
    </>
    )
}
export default Portfolio;