import React from 'react';
import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
function Hero() { 
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
  >
      <div className="left w-1/2 relative pt-[120px] max-container sm:w-5/6">
        <p className='text-red-400 font-montserrat  text-[20px] leading-[24.83px] width-[244.167px] pt-3'>Our Summer collections</p>
        <h1 className='text-2xl font-bold text-[96px] leading-[106px] pt-[40px]'>
          The New Arrival<br />
          <span className='text-red-400'> Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-[18px] leading-[32px] mt-[24px] mb-[56px] h-[64px] max-w-[384px]'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p> 
        <button className='bg-red-400 text-white font-montserrat text-[18px] leading-[24px] w-[140px] h-[56px] rounded-[30px]'>
          Shop now
        </button> 
        <div className='flex justify-between pt-7 pb-3 pr-7'>
          <div > 
             <h1 className='text-[33px] font-bold leading-9'>1k+</h1> 
              <p className='font-montserrat text-[18px] leading-[32px]'>Brands</p>
          </div>
          <div > 
             <h1 className='text-[29px] font-bold leading-9'>50k+</h1> 
              <p className='font-montserrat text-[18px] leading-[32px]'>Shops</p>
          </div>
          <div > 
             <h1 className='text-[29px] font-bold leading-9'>350k+</h1> 
              <p className='font-montserrat text-[18px] leading-[32px]'>Customers</p>
          </div>
        </div>
      </div> 
      
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
