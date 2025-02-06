"use client";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../contants/NavLinks";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between my-4 items-center">
      <Image src={logo} width={100} height={100} alt="hoobbank" />

    
      <ul className="list-none sm:flex justify-end hidden items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal text-xl text-white cursor-pointer transition duration-300 ease-in-out sm:hover:underline ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

  
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu button"
          width={40}
          className="object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black mx-4 my-2 min-w-64 rounded-xl sidebar absolute top-24 right-0`}
        >
          <ul className="list-none flex gap-8 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-xl text-white ${
                  index == navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
