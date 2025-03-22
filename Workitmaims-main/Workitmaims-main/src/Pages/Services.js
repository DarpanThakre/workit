import React from 'react'
import Card1 from './Card1'

const Services = () => {
  return (
    <>
    
    <div className=' text-center' >Services</div>
    <div className=' mt-24  ml-10 items-center'>
    <div className="flex space-x-4">
      <Card1 
        image="image4.png" // Replace with your image URL
        title="Card Title 1"
        description="This is a brief description for Card 1."
         link="/Temp1"
      />
      <Card1 
        image="image3.png" // Replace with another image URL
        title="Card Title 2"
        description="This is a brief description for Card 2."
         link="/Temp2"
      />
       <Card1 
        image="image5.png" // Replace with another image URL
        title="Card Title 3"
        description="This is a brief description for Card 2."
         link="/Temp3"
      />

      <Card1 
        image="image4.png" // Replace with another image URL
        title="Card Title 4"
        description="This is a brief description for Card 2."
         link="/Temp4"
      />
    </div>
    </div>
    
    </>
  )
}

export default Services