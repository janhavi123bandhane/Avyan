// import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo/Logo2.jpeg";
import { useState } from "react";
import Options from "./Options";

export default function Header() {
  let [count, setCount] = useState(false);

  let New = () => {
    setCount(!count);
  };

  return (
    <header className="shadow  sticky backdrop-blur-md bg-black bg-opacity-15 z-50 top-0  md:h-[13rem] lg:h-[7rem] flex  xl:w-full md:w-[90rem] lg:w-[100rem] w-[60.3rem] font-Lato ">
      <nav className=" bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 w-full h-full">
        <div className="">
          <div className="flex justify-between flex-wrap gap-80 items-center xl:w-full md:w-[90rem] lg:w-[90rem] w-full  h-full ">
            <Link to="/" className="hidden lg:flex xl:flex items-center">
              <img src={logo} className="mr-3 md:h-16 rounded" alt="Logo" />
            </Link>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 lg:text-2xl md:text-lg text-lg text-[#003A47] lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-white" : "hover:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-white" : "hover:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                    }
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-white" : "hover:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-white" : "hover:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="http://google.com"
                    target="blank"
                    className={({ isActive }) =>
                      `  hover:underline block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-black" : "hover:text-orange-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Enquire Now
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mobile nav starts */}
        <div className="lg:hidden flex justify-between">
          <div>
            <img src={logo} className="mr-3 h-24 rounded mt-9" alt="Logo" />
          </div>
          <div className="text-4xl mt-4">
            <button
              onClick={New}
              className="text-[#003A47] mt-9"
              id="toggleButton"
            >
              <FiAlignJustify className="w-[5rem] h-[5rem]"></FiAlignJustify>
            </button>
            {count && <Options></Options>}
          </div>
        </div>
      </nav>
    </header>
  );
}
