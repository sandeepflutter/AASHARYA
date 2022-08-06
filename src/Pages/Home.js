import React from 'react';
import {ImArrowDown} from 'react-icons/im';
import {MdOutlineConnectWithoutContact} from 'react-icons/md';
import { Link } from 'react-scroll';
import hp from '../Assest/1.jpg';


const Home = ({intro, about:{ descr2} }) => {
  return (
    <div id="home" className='bg-blue-400'>
      <div className='lg:-z-10 '/>
    <div className=" max-w-7xl mx-auto pt-5">
      <div className='lg:flex md:flex'>
<div className='text-center md:pt-5'>
    <p className="md:text-[3.0vh] lg:text-[6vh]  font-titillium text-[2.5vh] font-bold text-red-200 ">{intro}</p>
    <p className="md:text-[2.5vh] lg:text-[0.0vh]  font-titillium text-[2.5vh] font-bold text-blue-200 ">To</p>
    <p className="md:text-[3.5vh] lg:text-[0.0vh]  font-hahmlet text-[2.5vh] font-bold text-white ">ASHRAYA ENGINEERING</p>
          <p className="md:px-[24vh] text-[3vh] px-[14vh] w-auto inline-block border-b-2"/>
    <p className="md:pt-10 lg:pt-10 px-5 md:text-[4vh] lg:text-[4.5vh] font-crimson text-[4vh] text-center text-white leading-relaxed font-bold">
    We deliver quality work within a reasonable time frame at competitive pricing solutions for problems related to engineering. 
        <div>
        </div>
      </p>
      <p className=" md:pt-10 lg:pt-10 md:text-[4vh] lg:text-[6vh] font-lora text-[4vh] text-center md:text-center text-teal-700 leading-relaxed mt-1 font-bold">
        {descr2} 
        </p>
</div>



        <div className='pl-3 pr-3 py-3'>
          <img
            className="md:w-[120vh]  md:h-[58vh] lg:w-[120vh] lg:h-[64vh] h-48 w-48 mx-auto shadow-xl rounded-full"
            src={hp}
            alt="Profile face"
          />
        </div>

</div>

        <div className="lg:text-left lg:pl-80 md:pt-4  text-center">
    <Link to="contact" spy={true} smooth={true} offset={-10} duration={600} href="#">
    <button class="bg-blue-500 hover:bg-gray-400bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center inline-flex ">
  <MdOutlineConnectWithoutContact class="fill-current mr-2" />
  <span className='text-[15px]'>Connect with us.</span>
</button>
    </Link>
    </div>

    <div className=" flex flex-col items-center md:pb-4 lg:mt-1 lg:pb-4 mt-5">
   <Link to="about" spy={true} smooth={true} offset={-90} duration={600} href="#">
  <ImArrowDown class="animate-bounce w-8 h-8 text-white"/>
   </Link>
  </div>
    </div>
      </div>
  );
};

export default Home;