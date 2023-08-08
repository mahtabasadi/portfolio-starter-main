import React from "react";

// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div
          className="w-full bg-black/20 h-[96px] 
        backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5
         flex items-center justify-between text-2xl text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="sevices"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
