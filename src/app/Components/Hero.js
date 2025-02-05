import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import Image from 'next/image'
import { GetStart } from './Index'


function hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} font-poppins`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <Image src={discount} alt='' width={20} height={20}/>
        <p className={`${styles.paragraph} ml-2 font-poppins`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full text-7xl py-5'>
          <h1 className='flex-1 font-poppins font-semibold text-[52px]  text-white ss:text-[72px] ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden'/>{""} 
          <span className='text-gradient'>Generation</span>{""} <br/>
      </h1>

          <div className='sm:flex hidden md:mr-4 mr-0'>
          <GetStart/>
          </div>
        </div>

        <h1 className='font-semibold text-[52px] text-white ss:text-[68px] ss:leading-[100px] leading-[75px] w-full'>
          Payment Method

        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.</p>
           
      </div>
   <div>
    <Image src={robot} alt='' className='w-[100%] h-[100%] relative z-[5]'/>

    <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
   </div>

   <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStart />
      </div>
      
      
    </section>
  )
}

export default hero
