import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
      <ul className="flex">
        <li className="p-4 hover:underline hover:text-[#00df9a] cursor-pointer">
          Home
        </li>
        <li className="p-4 hover:underline hover:text-[#00df9a] cursor-pointer">
          company
        </li>
        <li className="p-4 hover:underline hover:text-[#00df9a] cursor-pointer">
          Resourcees
        </li>
        <li className="p-4 hover:underline hover:text-[#00df9a] cursor-pointer">
          Contact
        </li>
        <li className="p-4 hover:underline hover:text-[#00df9a] cursor-pointer">
          About
        </li>
      </ul>
      <div onClick={handleClick} className="hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
}

export default NavBar;
