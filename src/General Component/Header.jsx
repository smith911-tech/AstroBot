import Logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { SiDiscord } from "react-icons/si";
export default function Header() {
    const [toggle, setToggle] = useState(false)
    const active = location.pathname
  return (
    <>
      <header className="bg-[#13072E] py-4 flex justify-between items-center sticky top-0 w-full z-10 font-Poppins lg1000:px-10">
        <section className="flex gap-2 items-center pl-4">
          <a href="" className="inline-block">
            <img src={Logo} alt="Logo" className=" w-11 h-11 object-contain" />
          </a>
          <p className=" text-white font-Poppins font-semibold text-base hidden">
            Astro Studio 
          </p>
        </section>
        <section
          className={`flex flex-col text-center z-50 justify-center gap-[10%] font-bold  fixed transition-all duration-500 top-0  ${
            toggle ? "left-0  " : "left-[99999px] "
          } bg-[#13072E] w-full h-[100svh] sm768:relative  sm768:w-[inherit] sm768:h-[inherit] sm768:flex-row sm768:gap-10 sm768:left-0 sm768:font-medium`}
        >
          <Link
            onClick={() => setToggle(false)}
            to="/"
            className={`text-3xl sm768:text-[15px] ${
              active === "/" ? "text-white" : "text-[#ffffff92]"
            }`}
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            to="/team"
            className={`text-3xl sm768:text-[15px] ${
              active === "/team" ? "text-white" : "text-[#ffffff92]"
            }`}
          >
            Team
          </Link>
          <Link
            onClick={() => setToggle(false)}
            to="/hosting"
            className={`text-3xl sm768:text-[15px] ${
              active === "/hosting" ? "text-white" : "text-[#ffffff92]"
            }`}
          >
            Hosting
          </Link>
          <button className=" text-xl flex justify-center w-full bg-white py-3 items-center gap-1 sm768:py-1  sm768:w-[190px] sm768:text-lg sm768:hidden">
            <p>Connect Discord</p>
            <SiDiscord />
          </button>
          <div
            className=" absolute top-6 text-white right-4 text-4xl cursor-pointer sm768:hidden block"
            onClick={() => setToggle(false)}
          >
            <HiMiniXMark />
          </div>
        </section>
        <section
          className=" text-4xl text-white cursor-pointer pr-4 sm768:hidden block"
          onClick={() => setToggle(true)}
        >
          <BiMenuAltRight />
        </section>
        <button className=" text-[15px] font-medium sm768:flex justify-center min-w-max bg-white py-3 px-2 items-center gap-1 sm768:py-1  sm768:text-base hidden mr-4 rounded-2xl">
          <p>Connect Discord</p>
          <SiDiscord />
        </button>
      </header>
    </>
  );
}
