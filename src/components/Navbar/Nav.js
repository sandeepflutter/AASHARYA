import { Transition } from "@headlessui/react";
import React,{useState} from "react";
import {Link} from 'react-scroll';
import { AiFillTwitterSquare } from "react-icons/ai";
import logo from "./../../Assest/logo.png";
import {FaYoutube}from 'react-icons/fa';
import {FaInstagram}from 'react-icons/fa';
import {AiOutlineFacebook}from 'react-icons/ai';
import {MdEmail}from 'react-icons/md';
import {FaPhoneSquareAlt}from 'react-icons/fa';

function Nav({social: { youtube, facebook, twitter, email, linkedin, insta } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-400 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 ">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
                  <div class="flex items-center">
                <img alt="logo" src={logo} class="w-25 h-20"/>
                <div>
                <p className="md:text-[0.0vh]  lg:text-[3vh] font-hahmlet text-gray-200 text-[0.0vh] underline">ASHRAYA ENGINEERING</p>
                <p className="md:text-[0.0vh] lg:text-[2vh]  font-hahmlet text-red-200 text-[0.0vh] text-center">Build To Change</p>
                </div>
                </div>
                </Link>
              </div>
              <div className="hidden md:block absolute right-10 bottom-14 ">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a onClick={()=>setIsOpen(false)}
                  className=" text-white py-2 rounded-md text-sm font-medium hover:underline"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email} target="_blank" rel="noreferrer"
                  >
                    <div className="flex items-center">
                    <MdEmail className="h-5 w-5 " />
                    <p className="pl-2">ashrayaengineering824@outlook.com</p>
                    </div>
                  </a>
                  <div
                  className=" text-white px-5 py-2 rounded-md text-sm font-medium"
                  >
                    <div className="flex items-center">
                    <FaPhoneSquareAlt className="h-5 w-5"/>
                    <p className="pl-2">+977-9808007978</p>
                    </div>
                  </div>
                  <a className="text-blue-100 hover:text-blue-600 transition-colors duration-300 pr-1"
              href={facebook} target="_blank" rel="noreferrer" >
              <AiOutlineFacebook className='h-8 w-8 '/>
            </a>

            <a className="text-blue-100 hover:text-blue-500 transition-colors duration-300 pr-1"
              href={twitter} target="_blank" rel="noreferrer">
              <AiFillTwitterSquare className='h-8 w-8'/>
            </a>

            <a className="text-blue-100 hover:text-red-600 transition-colors duration-300 pr-1"
              href={youtube} target="_blank" rel="noreferrer">
              <FaYoutube className='h-8 w-8'/>
            </a>

            <a className="text-blue-100 hover:text-red-400 transition-colors duration-300 pr-1"
              href={insta} target="_blank" rel="noreferrer">
              <FaInstagram className='h-8 w-8'/>
            </a>
                  </span>
                  </div>
              <div className="hidden md:block absolute right-40 bottom-3 ">
                <div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="about" spy={true} smooth={true} offset={-50} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>

                  <Link to="skill" spy={true} smooth={true} offset={-90} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Why Us
                  </Link>

                  <Link to="project" spy={true} smooth={true} offset={-90} duration={600}
                  onClick={()=>setIsOpen(false)}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>

                  <Link to="service" spy={true} smooth={true} offset={-90} duration={600}
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>

                  <Link to="team" spy={true} smooth={true} offset={-90} duration={600}
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Team
                  </Link>

                  <Link to="contact" spy={true} smooth={true} offset={-100} duration={600}
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="about" spy={true} smooth={true} offset={-300} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                <Link to="skill" spy={true} smooth={true} offset={-350} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   Why Us
                </Link>

                <Link to="project" spy={true} smooth={true} offset={-350} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>

                <Link to="service" spy={true} smooth={true} offset={-350} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link to="team" spy={true} smooth={true} offset={-350} duration={600}
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Our Team
                  </Link>

                <Link to="contact" spy={true} smooth={true} offset={-350} duration={600} 
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
