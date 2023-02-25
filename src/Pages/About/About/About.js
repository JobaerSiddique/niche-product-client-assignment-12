import React from 'react';
import img from "../../../images/banner/yzf-r15-right-front-three-quarter-12.jpg"
const About = () => {
   
    return (
        <div className='mt-20'>
            <h1 className='text-center text-xl font-bold lg:text-5xl'>About Us</h1>
            <div>
            <div className="hero h-screen  p-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} alt="" className='w-2/4' />
    <div>
      <h1 className="text-xl text-justify font-bold p-5">Before start welcome to Safir Bike Point and in this page you will get All bike price in bd and many helpful blogs check full page thanks. Motorcycle is one of the most popular vehicles in Bangladesh and all over the world. On this page, you will get updated Bangladeshi Motorcycles price list with review and latest motorbike & scooter price updates.

Motorcycle / Motorbike & Scooter, Whatever you call it, You will get all available bike brands in BD showrooms & Specifications with image details from every bike page.

Just enter the motorcycle brand page like Honda, then you will get all the available Honda Bikes price in BD. Before buying a motorcycle in Bangladesh it will help you.</h1>
      
     
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default About;