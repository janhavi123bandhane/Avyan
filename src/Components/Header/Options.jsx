import { useState, useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Options = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const optionsRef = useRef(null);



  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setContentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={optionsRef}
      className={`absolute ml-[-87.4rem] mt-14 md:w-[93rem] w-[64rem] h-[30rem] ${
        contentVisible ? "" : "hidden"
      }`}
    >
      
      <div className="  flex flex-col ml-14 font-serif space-y-11 font-semibold text-5xl text-[#003A47] backdrop-blur-lg bg-white bg-opacity-60 p-6">
        <Link to={"/"} className="hover:text-blue-400">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-blue-400">
          About Us
        </Link>
        <Link to={"/portfolio"} className="hover:text-blue-400">
          Project
        </Link>
        <Link to={"/contact"} className="hover:text-blue-400">
          Contact Us
        </Link>
        <Link to={"http://google.com"} className="hover:text-red-600 hover:underline">
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default Options;
