import r from './../../Assest/r.jpg';
import u from './../../Assest/u.jpg';
import n from './../../Assest/n.jpg';
import d from './../../Assest/d.jpg';
import um from './../../Assest/um.jpg';
import san from './../../Assest/san.png';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";






const Team = () => {
  return (
    

<section id="team" class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
      Engineers with extensive engineering experience make up our team, and we take pleasure in the work we produce and the results we provide.
        </p>
    </div>

    <Swiper
    slidesPerView={3}
    spaceBetween={200}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
 


      <SwiperSlide>
        <div class="h-full pr-10 w-[40vh] flex flex-col items-center text-center pb-4" >
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={d}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Er. Diwas Pun</h2>
            <h3 class="text-gray-500 mb-3">C.E.O</h3>
            <p class="mb-4">Civil Engineering graduate from Kathmandu Engineering College.</p>
        
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center w-[40vh]">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={r}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Ar. Roshna Rai</h2>
            <h3 class="text-gray-500 mb-3">Head of Architecture</h3>
            <p class="mb-4">Architecture graduate from Thapathali Engineering Campus.</p>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center w-[40vh]">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={n}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Er. Newton Timalsina</h2>
            <h3 class="text-gray-500 mb-3">Head of Structure</h3>
            <p class="mb-4">Civil Engineering graduate from Kathmandu Engineering College.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center w-[40vh]">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={u}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Utsav Pun</h2>
            <h3 class="text-gray-500 mb-3">Head Of Finance</h3>
            <p class="mb-4">Management graduate from Danfe.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class=" pr-10 h-full flex flex-col items-center text-center w-[40vh]">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={um}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Siddhant Shrestha</h2>
            <h3 class="text-gray-500 mb-3">Head Of Finance</h3>
            <p class="mb-4">Civil Engineering graduate from Morgan Engineering College.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="h-full flex flex-col items-center text-center w-[40vh] pr-10">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={san}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">Sandeep Budha</h2>
            <h3 class="text-gray-500 mb-3">Software Developer</h3>
            <p class="mb-4">Computer Science and Engineering graduate from RGIT(VTU).</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="h-full flex flex-col items-center text-center w-[40vh] pr-10">
         
        </div>
      </SwiperSlide>
    
    </Swiper>
  </div>
</section>
  );
};

export default Team;