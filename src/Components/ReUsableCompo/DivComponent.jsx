/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdContact } from "react-icons/io";

const DivComponent = ({ item1, item2 ,item3}) => {
    

  return (
  <div className="xl:w-[40rem] xl:h-[30rem] lg:w-[35rem] lg:h-[35rem] md:w-[37rem] md:h-[35rem] w-[25rem] h-[23.5rem] mr-6 rounded-xl bg-white">
      <div className="text-[#003A47]  ml-[4rem] mt-[3rem]">
          <div className="text-5xl inline-block"><IoMdContact /></div>
          <div className=" font-Rosarvio text-5xl  text-center  inline-block ml-[2rem]">{item1}</div><br />
          <div className="font-Roboto md:text-2xl  text-center inline-block ml-[4rem]">{item2}</div><br />
      </div>
      <div className="text-cenetr md:text-2xl font-Lato md:mt-20 mt-10 ml-10 mr-10 text-[#003A47]">
       {item3}
      </div>
  </div>
  );
};

export default DivComponent;