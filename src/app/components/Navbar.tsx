"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed w-full flex justify-between items-center px-6 py-4 bg-navy shadow-md z-50">
      {/* Logo */}
      <div className="text-green font-mono text-lg cursor-pointer">AP</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-end items-center">
        <ul className="flex space-x-8 text-sm font-mono text-lightSlate mx-6">
          <li className="hover:text-green transition cursor-pointer">
          <a href="#about" className="scroll-mt-20"><span className="text-green">01.</span> About</a> 
          </li>
          <li className="hover:text-green transition cursor-pointer">
          <a href="#experience" className="scroll-mt-20" ><span className="text-green">02.</span> Experience</a> 
          </li>
          <li className="hover:text-green transition cursor-pointer">
            <a href="#work" className="scroll-mt-20"><span className="text-green">03.</span> Work</a> 
          </li>
          <li className="hover:text-green transition cursor-pointer">
          <a href="#contact" className="scroll-mt-20"><span className="text-green">04.</span> Contact</a> 
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1MCZeLgRb_HW4AP4pTbZgLBo4IWVHYjWr/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-xs font-mono leading-none text-green border border-green rounded-md py-2.5 px-4 transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[3px_3px_0_0_#64ffda]"
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-green text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-navy shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-green text-2xl">
            <FiX />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <div className="flex flex-col items-center justify-center h-[80%] space-y-6 text-lightSlate font-mono">
          <ul className="space-y-6 text-lg">
            <li className="hover:text-green transition cursor-pointer" onClick={toggleMenu}>
                <a href="#about" ><span className="text-green">01.</span> About</a> 
            </li>
            <li className="hover:text-green transition cursor-pointer" onClick={toggleMenu}>
              <a href="#experience"><span className="text-green">02.</span> Experience</a>
            </li>
            <li className="hover:text-green transition cursor-pointer" onClick={toggleMenu}>
              <a href="#work"><span className="text-green">03.</span> Work</a>
            </li>
            <li className="hover:text-green transition cursor-pointer" onClick={toggleMenu}>
              <a href="#featured"><span className="text-green">03.</span> Projects</a>
            </li>
            <li className="hover:text-green transition cursor-pointer" onClick={toggleMenu}>
              <a href="#contact"><span className="text-green">04.</span> Contact</a>
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1MCZeLgRb_HW4AP4pTbZgLBo4IWVHYjWr/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono leading-none text-green border border-green rounded-md py-2 px-6 transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[3px_3px_0_0_#64ffda]"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
