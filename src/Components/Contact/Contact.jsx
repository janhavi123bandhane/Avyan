
// import React from "react";
import ConImg from '/images/Conatct.png'
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="bg-[#EDFFFF] xl:w-full xl:h-[40rem] lg:w-[100rem] lg:h-[40rem] md:w-[90rem] md:h-[40rem] w-[60rem] h-[40rem] flex justify-evenly">
                <div className="pt-44 ml-[1rem]">
                   
                        <p className="text-4xl font-Rosarvio text-[#003A47]">Contact Us</p>
                        <p className="mt-6 font-Lato text-lg text-[#003A47]">Thank you for your interest in Avyaan Infrastructure. We're here to assist you.</p>
                        <p className="font-Lato text-lg text-[#003A47]">Please feel free to reach out to us.</p>
                        <button className=" w-32 h-8 mt-6 rounded-lg hover:bg-[#576b6d] hover:text-[#0e1618] bg-[#003A47] text-white font-Roboto"><Link to={"https://www2.hm.com/en_in/index.html"} target='_blank'>Contact</Link></button>
                       
                </div>
               
                

                <div className="pt-44">
                    <img
                        src={ConImg}
                        alt="Contact"
                        className=''
                    />
                </div>
            </div>

    );
}
