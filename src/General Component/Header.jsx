import Logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { SiDiscord } from "react-icons/si";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const active = location.pathname;
    let hoverTimeout;

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setShowDropdown(false);
        }, 300); // Adjust this delay as needed
    };


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
          className={`flex flex-col text-center z-50 justify-center gap-[10%] font-bold  fixed  top-0 ease-in-out  ${
            toggle ? "left-0 " : "left-[99999px] "
          } bg-[#13072E] w-full h-[100vh] sm768:relative  sm768:w-[inherit] sm768:h-[inherit] sm768:flex-row sm768:gap-10 sm768:left-0 sm768:font-medium`}
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
          <div
                    className="relative"
            >
                <Link
                    to="/hosting"
                    className="text-3xl sm768:text-[15px] text-[#ffffff92]"
                    onMouseEnter={handleMouseEnter}
                    onClick={(e) => e.preventDefault()}
                  >
                    Hosting
                </Link>
                <div
                        className={`absolute left-0 bg-[#13072E] text-white py-2 ${showDropdown ? 'visible' : 'hidden'}`}
                        style={{ top: '100%', left: '0', transform: 'translateX(-17%)' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                  >
                    <Link to="/discordh" className="block px-4 py-2">Discord</Link>
                    <Link to="/minecraft" className="block px-4 py-2">Minecraft</Link>
                    <Link to="/other" className="block px-4 py-2">Other</Link>
                </div>
            </div>
          <a
            href="https://status.astro-studios.xyz/status/studios"
            target="blank"
            onClick={() => setToggle(false)}
            className={`text-3xl sm768:text-[15px] text-[#ffffff92]
            `}
          >
            Status Page
          </a>
          <button className=" text-xl flex justify-center w-full bg-white py-3 items-center gap-1 sm768:py-1  sm768:w-[190px] sm768:text-lg sm768:hidden">
            <p>Connect to Discord</p>
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
          <p>Connect to Discord</p>
          <SiDiscord />
        </button>
      </header>
    </>
  );
}