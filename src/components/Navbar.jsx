import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";
import { logo } from "../assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState('home')

  const toggleHandler = () => {
    setToggleNav((prev) => !prev);
  };

  const activeHandle = (id) => {
    setActive(id)
  }

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <div className={`${styles.heading}`}>
        <a href="/">
        <img src={logo} alt="logo" className="w-[130px] cursor-pointer" />
        </a>
      </div>

      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => {
          return (
            <li
              key={nav.id}
              className={`font-montserrat font-normal cursor-pointer text-[16px] ${
                idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
              } ${active === nav.id ? 'text-white' : 'text-lightWhite'} hover:text-white transition-all duration-500`} onClick={() => {activeHandle(nav.id)}}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>

          );
        })}
      </ul>

      {/* navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <div onClick={toggleHandler}>
          {toggleNav ? (
            <AiOutlineClose className="text-white w-[30px] h-[30px] object-contain" />
          ) : (
            <AiOutlineMenu className="text-white w-[30px] h-[30px] object-contain" />
          )}
        </div>

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-[175px] right-0 left-0 w-full sidebar bg-black-gradient`}>
          {/* navigation link */}
          <ul className="list-none flex justify-center items-center flex-1">
            {navigationLinks.map((nav, idx) => {
              return (
                <li
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px] ${
                  idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                } ${active === nav.id ? 'text-white' : 'text-lightWhite'} hover:text-white transition-all duration-500`} onClick={() => {activeHandle(nav.id)}}>
                {nav.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
