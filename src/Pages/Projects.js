import img5 from "../Assest/5.jpg";
import img2 from "../Assest/2.JPG";
import img4 from "../Assest/4.jpg";

import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Idata from "./../Idata";
import Info from "./../info";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import Tippy from '@tippyjs/react';

import React from 'react';

const Projects = () => {


  return (
<section id="project" class="text-gray-400 bg-gray-900 body-font w-full h-full pt-5">

  <div class="container px-5 mx-auto">
  <div class="flex flex-col text-center w-full mb-5">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center">My Projects</h1>
    </div>
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
      
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }
      }
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        
      >        

        <SwiperSlide>
        <Tippy content={Idata[0].detail} placement='right'>
       <button class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={img5} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">PROJECT NAME</p>
        <p class="text-[0.5h] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] text-black font-bold"><Info title={Idata[0].title}/></p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">WORK</p>
        <p class="text-[0.5vh] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] text-black font-bold"><Info work={Idata[0].work}/></p>
        </div>
      </div>
    </button>
    </Tippy>
        </SwiperSlide>
        <SwiperSlide>
        <Tippy content={Idata[1].detail} placement='right'>
       <button class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={img2} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">PROJECT NAME</p>
        <p class="text-[0.5vh] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] text-black font-bold"><Info title={Idata[1].title}/></p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">WORK</p>
        <p class="text-[0.5vh] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] text-black font-bold"><Info work={Idata[1].work}/></p>
        </div>
      </div>
    </button>
    </Tippy>
        </SwiperSlide>
        <SwiperSlide>
        <Tippy content={Idata[2].detail} placement='right'>
       <button class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={img4} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">PROJECT NAME</p>
        <p class="text-[0.5vh] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] font-bold text-black"><Info title={Idata[2].title}/></p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh] text-black underline">WORK</p>
        <p class="text-[0.5vh] sm:text-[0.5vh] md:text-[1vh] lg:text-[2vh] font-bold text-black"><Info work={Idata[2].work}/></p>
        </div>
      </div>
    </button>
    </Tippy>
        </SwiperSlide>

       
      </Swiper>
    </>
  </div>

  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            5
          </h6>
          <p className="font-bold">Total Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            3
          </h6>
          <p className="font-bold">Project Completed</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            2
          </h6>
          <p className="font-bold">Ongoing Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            3
          </h6>
          <p className="font-bold">Happy Clients</p>
        </div>
      </div>
    </div>
</section>
  )
}

export default Projects;