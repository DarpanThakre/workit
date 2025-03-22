import React from 'react'
import ContentHome from '../Component/ContentHome'
import Card from '../Component/Card'
import { Footer } from '../Component/Footer'
import ScrollableRowImages from '../Component/ScrollableRowImages'

function Home() {
  return (
    <>
    <div className=" pt-10 mt-10">
      <ContentHome/>
    </div>
    <div className=' pt-10 p-7  bg-[#5330B440]'>
      <ScrollableRowImages/>
   
     
    </div>
    <div className='pt-10 mt-10'>
      <Card/>
    </div>
     <div className=' pt-10'>
      <Footer/>
     </div>
    
    
    
    </>
   

  )
}

export default Home
