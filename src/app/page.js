"use client"

import styles from './style'
import React from 'react'
import {Billing, Business, CardDeals, Clients, CTA, Footer, Hero, NavBar, Stats, Testimonial,  } from './Components/Index'

function page() {
  return (
   <div className='bg-black w-full overflow-hidden text-white'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>

    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>

    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
       <CardDeals/>
       <Testimonial/>
        <Clients/>
       <CTA/>
       <Footer/>
      </div>

    </div>

   </div>
  )
}

export default page
