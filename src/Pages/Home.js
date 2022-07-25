import React from 'react';
import profile from "../Assest/logo2.jpg";
import {ImArrowDown} from 'react-icons/im';
import { Link } from 'react-scroll';
import pp from '../Assest/1.jpg';


const Home = ({ title, name, intro, about:{ descr2} }) => {
  return (
    <div id="home" className='w-full h-[90vh] top-[90px] '>
      <img className='object-cover h-full w-full absolute -z-10 bg-blue-400' src={pp} alt="hello" />
    <div className="flex max-w-7xl mx-auto pt-12">
    <div className="w-full">
      <div className="h-[55vh] border-2 flex flex-col justify-center max-w-md mx-auto bg-white shadow-xl rounded-xl p-5 bg-opacity-5 backdrop-blur-sm">
        <div>
          <img
            className=" w-[18vh] mx-auto shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-[3.5vh] font-bold text-white">{intro}</p>
          <p className="font-titillium text-[5vh] font-semibold text-blue-500">
            {name}
          </p>
          <p className="font-titillium text-[3vh] text-red-500 pt-1 pb-2 px-[14vh] w-auto inline-block border-b-2 font-Titillium Web">
            {title}
          </p>
          <div className="flex align-center justify-center mt-1">
          </div>
        </div>
      </div>
    </div>

<div>
    <p className=" md:text-[3vh] lg:text-[4vh] font-lora text-[2vh] text-center md:text-center text-white leading-relaxed mt-5 font-bold">
    To procure projects at competitive pricing, provide safe working conditions anddeliver quality work within reasonable time frame. 
        <div>
        </div>
      </p>
      <p className=" md:text-[5vh] lg:text-[7vh] font-lora text-[4vh] text-center md:text-center text-white leading-relaxed mt-5 font-bold">
        {descr2} 
        <div>
        
        </div>
      </p>
      </div>
    </div>

    <div className="text-center pl-80 mt-1">
    <Link to="contact" spy={true} smooth={true} offset={-10} duration={600} href="#">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Connect with us.
    </button>
    </Link>
    </div>
    
   <div className=" flex flex-col justify-center items-center mt-10">
   <Link to="about" spy={true} smooth={true} offset={-10} duration={600} href="#">
  <ImArrowDown class="animate-bounce w-10 h-10 text-white"/>
   </Link>
  </div>
    </div>
    
  );
};

export default Home;