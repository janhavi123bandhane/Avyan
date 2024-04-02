/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import logo from '/logo/Logo2.jpeg'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <>
     
        <div className="bg-[#003A47] xl:w-full xl:h-[48rem] lg:w-[100rem] lg:h-[45rem] md:w-[90rem] md:h-[50rem] w-[60.3rem] h-[34rem]">
           <div className=" flex justify-evenly font-Lato pt-20 ">

            {/* First */}
            <div>
                <img 
                src={logo}
                className="xl:w-[20rem] lg:w-[18rem] md:w-[15rem] w-[10rem]"
                ></img>
                <p className="text-white lg:text-3xl md:text-4xl mt-9">Follow Us On</p>
                <div className="flex mt-6">
                <Link to={"https://www.instagram.com/avyaaninfrastructure"}><FaInstagram className="md:w-[4rem] md:h-[3rem]  text-pink-800"></FaInstagram></Link>
                <Link to={"mailto:salesavyaaninfra@gmail.com"}><MdEmail className="md:w-[4rem] md:h-[3rem] text-blue-400 ml-3"></MdEmail></Link>
                </div>
            </div>


            {/* 2nd */}
            <div className="text-white flex flex-col mt-36">
              <p className=" font-Rosarvio lg:text-3xl md:text-4xl">CONTACT US</p><br />
             <div className="text-3xl">
                <p>Office location :- Paschim vihar Delhi</p><br></br>
                <p>salesavyaaninfra@gmail.com</p><br />
                <p>9560946633</p>
             </div>
            </div>


            {/* 3rd */}
            <div className="text-white flex flex-col  mt-36">
              <p className=" font-Rosarvio lg:text-3xl md:text-4xl">USEFUL LINKS</p><br />
              <div className="text-3xl">
                <p><Link to={'/about'}>About Us</Link></p><br></br>
                <p>Terms and Condition</p><br />
                <p><Link to={'/contact'}>Suport Center</Link></p><br />
                <p>Privacy Policy</p>
              </div>
            </div>


            {/* 4th */}
            {/* <div className="text-white">
                 <p className=" font-Rosarvio  xl:text-xl lg:text-[1.1rem] md:text-[1rem] text-[0.9rem] mt-36">NEWSLETTER</p><br />
                 <div className="flex flex-row">
                    <input type="email" placeholder="Email address" className="xl:w-[15rem] xl:h-[3rem] lg:w-[12rem] lg:h-[2.5rem] md:w-[10rem] md:h-[2.1rem] w-[8rem] h-[1.5rem] text-[#003A47] md:rounded-tl-xl md:rounded-bl-xl  rounded-tl-lg rounded-bl-lg"></input>
                    <div className=" bg-[#EEC836] text-[#003A47] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:w-[5rem] xl:h-[3rem] lg:w-[4rem] lg:h-[2.5rem] md:w-[3rem] md:h-[2.1rem] w-[2rem] h-[1.5rem] md:rounded-tr-xl md:rounded-br-xl  rounded-tr-lg rounded-br-lg flex justify-center items-center">Send</div>
                 </div>
            </div> */}


              </div>

              
            <div className=" mt-20">

                  <hr className="ml-[7rem] mr-[7rem]"></hr>
            </div>
            <p className=" text-center mt-10 text-2xl text-white">&copy; Copyright 2020 All rights reserved.</p>
        </div>
        </>
    );
}
