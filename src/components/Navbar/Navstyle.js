import r from './../../Assest/r.jpg';
import u from './../../Assest/u.jpg';
import n from './../../Assest/n.jpg';
import d from './../../Assest/d.jpg';
import um from './../../Assest/um.jpg';
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
      <h1 class="text-2xl font-medium title-font mb-4 text-white font-hahmlet">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-lora">
      Engineers with extensive engineering experience make up our team, and we take pleasure in the work we produce and the results we provide.
        </p>
    </div>

    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    modules={[Pagination]}
    className="mySwiper"
  >
 
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center pb-4" >
          <img alt="team" class="flex-shrink-0 rounded-lg object-contain object-center mb-4" src={d}/>
          <div class="w-full">
            <p class="title-font font-medium text-lg text-white text-[2.5vh] font-lora">Er. Diwas Pun</p>
            <p class="text-gray-500 mb-3 text-[2.5vh] font-lora">C.E.O</p>
            <p class="mb-4 text-[2.5vh] font-lora">Civil Engineering graduate from Kathmandu Engineering College.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg object-contain object-center mb-4" src={r}/>
          <div class="w-full">
            <p class="title-font font-medium text-lg text-white text-[2.5vh] font-lora">Ar. Roshna Rai</p>
            <p class="text-gray-500 mb-3 text-[2.5vh] font-lora">Head of Architecture</p>
            <p class="mb-4 text-[2.5vh] font-lora">Architecture graduate from Thapathali Engineering Campus.</p>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg object-contain object-center mb-4" src={n}/>
          <div class="w-full">
            <p class="title-font font-medium text-lg text-white text-[2.5vh] font-lora">Er. Newton Timalsina</p>
            <p class="text-gray-500 mb-3 text-[2.5vh] font-lora">Head of Structure</p>
            <p class="mb-4 text-[2.5vh] font-lora">Civil Engineering graduate from Kathmandu Engineering College.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full pr-10 flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg object-contain object-center mb-4" src={u}/>
          <div class="w-full">
            <p class="title-font font-medium text-lg text-white text-[2.5vh] font-lora">Utsav Pun</p>
            <p class="text-gray-500 mb-3 text-[2.5vh] font-lora">Department Of Finance</p>
            <p class="mb-4 text-[2.5vh] font-lora">Management graduate from Danfe.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class=" pr-10 h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg object-contain object-center mb-4" src={um}/>
          <div class="w-full">
            <p class="title-font font-medium text-lg text-white text-[2.5vh] font-lora">Er. Siddhant Shrestha</p>
            <p class="text-gray-500 mb-3 text-[2.5vh] font-lora">Construction & Supervision</p>
            <p class="mb-4 text-[2.5vh] font-lora">Civil Engineering graduate from Morgan Engineering College.</p>
          </div>
        </div>
      </SwiperSlide>  
    </Swiper>
  </div>
</section>
  );
};

export default Team;