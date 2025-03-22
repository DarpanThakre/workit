import React from 'react';
import Shape2 from '../Component/Shape2';

const About = () => {
  return (
    <section className=" overflow-hidden">
      {/* Shape2 as a background */}
      <div className=" absolute h-full ">
        <Shape2 />
      </div>
      <div className="absolute z-7 mt-60 max-w-lg mx-auto lg:ml-10 text-left">
  <h1 className="text-white text-5xl font-bold mb-4 drop-shadow-lg">
    About Us
  </h1>

  {/* Subheading with enhanced gradient and 3D effect */}
  <h2 className="text-2xl font-semibold mb-6 drop-shadow-lg bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-300 text-transparent bg-clip-text">
    Make it Happen through Workit
  </h2>

  {/* Paragraph with vibrant gradient and enhanced 3D effect */}
  <p className="text-lg leading-relaxed bg-gradient-to-r bg-white  text-white bg-clip-text drop-shadow-lg">
    Our vision is to enable small to medium companies to grow business smarter.
    Workit is a strategic solution that helps businesses meet their customers
    where they are – on the messaging platform with incredible market penetration – Website
    Its big presence means many customers and prospects are accessible and ready to engage in real-time.
    <br /><br />
    4+ years of experience in IT Services.
  </p>
</div>
  {/* New section for "Why you should choose" */}
  <div className="absolute z-7 mt-80 ml-5  right-0 max-w-lg  lg:ml-1 text-left">
        <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">
          Why you should choose
        </h3>
        <h4 className="text-2xl font-semibold mb-3 drop-shadow-lg text-purple-300">
          Workit
        </h4>
        <p className="text-lg leading-relaxed text-white drop-shadow-lg mb-4">
          We help companies have personalized conversations with customers at scale with easy-to-use customer engagement software that’s built on Website Business API. 
          For example, our customers often automate sending personalized notifications via Website from their systems through Workit.
        </p>

        <h4 className="text-xl font-semibold mb-2 drop-shadow-lg text-purple-300">
          Best User Interfaces
        </h4>
        <h4 className="text-xl font-semibold mb-2 drop-shadow-lg text-purple-300">
          Smooth Development
        </h4>
        <h4 className="text-xl font-semibold mb-2 drop-shadow-lg text-purple-300">
          Quality Templates
        </h4>
      </div>


    </section>
  );
}

export default About;
