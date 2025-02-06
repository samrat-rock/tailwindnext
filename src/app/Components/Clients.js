import { clients } from '../contants/NavLinks'
import styles from '../style'
import React from 'react'
import Image from 'next/image'

function client() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <Image src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain'/>

          </div>
        ))}
      </div>
      
    </section>
  )
}

export default client
