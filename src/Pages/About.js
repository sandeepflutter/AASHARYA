import React from 'react';
import logo from "../Assest/logo2.jpg";

const About = ({about:{ descr1, descr5,descr3} }) => {
  return (

<section id="about" class="bg-blue-100">

  <div class="container px-3 py-3 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto px-5">
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div class="flex flex-col items-center text-center justify-center">
            <p class="text-[5vh] font-bold title-font mt-4 text-blue-500 text-lg">About</p>
            <p class="text-[7vh] font-medium title-font mt-4 text-black text-lg font-hahmlet">ASHRAYA</p>
            <div class="w-64 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
          </div>
          <div class="box-border p-4 border-2 bg-blue-500 border-white rounded-lg"> 
          <img
            className="shadow-xl max-w-full h-full rounded-lg "
            src={logo}
            alt="logo1"
          />
          </div>
        </div>
  
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-justify text-black font-lora">{descr1}</p>
          <p class="leading-relaxed text-lg mb-4 text-justify text-black font-lora">{descr3}</p>
          <p class="leading-relaxed text-lg mb-4 text-justify pb-6 text-black font-lora">{descr5}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;