import React from 'react'

import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

function SpecialOffer() {
  return (
    
    <section className=' flex flex-wrap-reverse max-xl:gap-6 max-xl:py-2 '>  

         <img src={offer} alt={offer}  className='flex-1'></img> 
         <div className='flex flex-1 flex-col pt-[100px] pl-4 max-xl:mt-2'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer