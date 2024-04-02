import Img1 from '/images/image1.jpg'

function About(){
    return (
        <>
          <div className="font-Lato overflow-x-hidden bg-[#EDFFFF] xl:h-full lg:h-full md:h-full  h-full  xl:w-full md:w-[90rem] lg:w-[100rem] w-[60rem] pt-[3rem] mt-[-3rem]" > 
      {/* About us part start */}
      <div className=' flex justify-center flex-col'>
         
             <p className='text-[#003A47] md:text-6xl mt-20 text-center '>About us</p>
       
             <div className='flex justify-center mt-11 text-center lg:text-2xl md:text-3xl  xl:ml-46 lg:ml-46 md:ml-20 ml-12  xl:mr-46 lg:mr-46 md:mr-20 mr-12 '>
                <p>Welcome to Avyaan Infrastructure, a leading force in the construction industry committed to transforming visions into reality.With an unwavering dedication to quality, innovation, and excellence, 
                we have established ourselves as a trusted partner for a diverse range of construction projects.Established in the year 2020, our philosophy revolves around a client-centric approach, where we prioritize 
                communication, transparency, and collaboration to ensure that every project is a seamless and rewarding experience. From residential buildings to commercial complexes, from infrastructure projects to 
                renovation endeavors, we undertake each assignment with precision and a passion for excellence. Our commitment to quality extends beyond the completion of a project. We foster long-term relationships
                with our clients, providing ongoing support and maintenance services to ensure the longevity and functionality of our constructions.Choosing Avyaan Infrastructure means choosing a constructionpartner dedicated
                to excellence, integrity, and reliability. Join us in the journey of turning your dreams into reality, where every brick laid and every structure built is a testament to our unwavering commitment to
                craftsmanship and client satisfaction. Avyaan Infrastructure – Building Dreams, Building Futures.</p>
            </div>
      
     </div>
     {/* about us end */}

     {/* Our events start */}
     <div className='flex flex-row'>
           <div className=' xl:ml-46 lg:ml-46 md:ml-20 ml-12 mt-28 flex flex-col'>
               <p className='text-[#003A47] md:text-6xl mt-11'>Our Services</p>
        
               <p className='lg:text-2xl md:text-3xl mt-11 mb-6'>At Avyaan Infrastructure,we seamlessly blend the art of<br />
               construction with the finesse of interior design. As a<br />  comprehensive construction and interior services provider,<br /> 
               we pride ourselves on delivering integrated solutions<br ></br> that bring architectural visions to life.From construction to<br /> home interior, supervision, mapping, designing,<br /> we are committed to building and fulfiling our<br /> customers demands.</p>
           
           
          </div>
          <div className='mb-20 lg:ml-72'>
              <img src={Img1}
                className=" mt-48 xl:w-[40rem] xl:h-[30rem] lg:w-[35rem] lg:h-[25rem] md:w-[30rem] md:h-[20rem] "
              ></img>
          </div>
     </div>



    </div>
        </>
    )
}
export default About;