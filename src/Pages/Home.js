import React from 'react';
import {FaHandshake} from 'react-icons/fa';
import {ImArrowDown} from 'react-icons/im';
import { Link } from 'react-scroll';
import hp from '../Assest/1.jpg';


const Home = ({intro, about:{ descr2} }) => {
  return (
    <div id="home" className='w-full h-[90vh] top-[90px] '>
      <div className='object-cover h-full w-full absolute -z-10 bg-blue-400'/>
    <div className="flex max-w-7xl mx-auto pt-12">
<div className='text-center'>
    <p className="font-titillium text-[6vh] font-bold text-red-200 ">{intro}</p>
          <p className="text-[3vh] text-red-500 px-[14vh] w-auto inline-block border-b-2"/>
    <p className=" md:text-[3vh] lg:text-[4vh] font-lora text-[2vh] text-center md:text-center text-white leading-relaxed mt-5 font-bold">
    We deliver quality work within a reasonable time frame at competitive pricing solutions for problems related to engineering. 
        <div>
        </div>
      </p>
      <p className=" md:text-[3.5vh] lg:text-[5.5vh] font-lora text-[2.5vh] text-center md:text-center text-teal-700 leading-relaxed mt-5 font-bold">
        {descr2} 
        <div className="text-center mt-5">
    <Link to="contact" spy={true} smooth={true} offset={-10} duration={600} href="#">
    <button class="bg-blue-500 hover:bg-gray-400bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center inline-flex ">
  <FaHandshake class="fill-current mr-2" />
  <span className='text-[20px]'>Connect with us.</span>
</button>
    </Link>
    <div className=" flex flex-col items-end mt-10">
   <Link to="about" spy={true} smooth={true} offset={-10} duration={600} href="#">
  <ImArrowDown class="animate-bounce w-10 h-10 text-white"/>
   </Link>
  </div>
    </div>
      </p>
      </div>

      <div>

      <div>
          <img
            className=" w-[200vh] mx-auto shadow-xl rounded-full"
            src={hp}
            alt="Profile face"
          />
        </div>
      </div>


      
    </div>

   
    
 
    </div>
    
  );
};

export default Home;