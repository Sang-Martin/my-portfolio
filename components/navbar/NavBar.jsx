import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/stone-logo.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="bg-base-100">
      <div className="container">
        <div class="navbar">
          <div class=" navbar-start flex-1">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={50} className="cursor-pointer hover:opacity-80" />
            </Link>
          </div>
          {/* nav */}
          <nav className=" hidden md:inline-block ">
            <ul className="flex flex-row gap-4 font-medium uppercase">
              <li className="hover:scale-105">
                <a href="#about" className=" hover:text-indigo-500 ">
                  About
                </a>
              </li>
              <li className="hover:scale-105">
                <a href="#skills" className="hover:text-indigo-500">
                  Skills
                </a>
              </li>
              <li className="hover:scale-105">
                <a href="#services" className="hover:text-indigo-500">
                  Services
                </a>
              </li>
              <li className="hover:scale-105">
                <a href="#portfolio" className="hover:text-indigo-500">
                  Portfolio
                </a>
              </li>
              <li className="hover:scale-105">
                <a href="#contact" className="hover:text-indigo-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* <div className="navbar-end">
            <p>End</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
