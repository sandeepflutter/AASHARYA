import bg from "../Assest/bg.jpg";

import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Idata from "./../Idata";
import Info from "./../info";

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';



const Projects = ({app: { bol, wot, aog,som,pot,wotd},}) => {
  const [showModal, setShowModal] = React.useState(false);



  function sayHello(name) {
    
    
    
    alert(`hello, ${name}`);
  }











  return (
<section id="project" class="text-gray-400 bg-gray-900 body-font w-full h-full pt-5">

  <div class="container px-5 mx-auto">
  <div class="flex flex-col text-center w-full mb-5">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center">My Projects</h1>
    {showModal ? (
        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
             
              <div className="flex p-3 border-b border border-blue-500 rounded-t">
                <h3 className="text-3xl font-semibold text-center items-center text-black">
                <Info title={Idata[sayHello.p].title} />
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-red-500 float-right text-3xl leading-none font-bold"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed text-justify">
                  <Info detail={Idata[sayHello.p].detail}/>
                  </p>

              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      ) : null}
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        
      >        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
       

        <SwiperSlide>
       <div class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={bg} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">PROJECT NAME</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">DATE</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">WORK</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
       <div class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={bg} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">PROJECT NAME</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">DATE</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">WORK</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
       <div class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={bg} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">PROJECT NAME</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">DATE</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">WORK</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
       <div class=" rounded overflow-hidden">
      <img class="w-full h-full object-cover object-center" src={bg} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">PROJECT NAME</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">DATE</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">WORK</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">Hello</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
       <button class=" rounded overflow-hidden" rel="noreferrer"
        type="button"
        onClick={() => sayHello(0)}
      >
      <img class="w-full h-full object-cover object-center" src={bg} alt="Mountain"/>
      <div className="flex justify-between px-4 bg-slate-600" >
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">PROJECT NAME</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">  <Info title={Idata[0].title}/></p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">DATE</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]"><Info date={Idata[0].date}/></p>
        </div>
        <div>
        <p class="font-bold text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]">WORK</p>
        <p class="text-[1vh] sm:text-[1vh] md:text-[1.5vh] lg:text-[2.5vh]"><Info work={Idata[0].work}/></p>
        </div>
      </div>
    </button>
        </SwiperSlide>
      </Swiper>
    </>
  </div>

  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144
          </h6>
          <p className="font-bold">Total Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            100
          </h6>
          <p className="font-bold">Project Completed</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            44
          </h6>
          <p className="font-bold">Ongoing Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            50
          </h6>
          <p className="font-bold">Happy Clients</p>
        </div>
      </div>
    </div>
</section>
  )
}

export default Projects;