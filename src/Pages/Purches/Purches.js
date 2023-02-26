import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookings from '../Bookings/Bookings';

const Purches = () => {
    const product = useLoaderData()
    const{bikeName,img,biketype,brakes,cc,displacement,enginetype,enginecooling,frontbrake,gears,maxpower,rearbrake,mileage,power,topspeed,tyre,startingtype,transmissiontype,price,brand}= product
    return (
        <div className='grid gap-20 grid-cols-1 lg:grid-cols-2 mt-20 p-5'>
            <div>
            <img className='w-80' src={img} alt="" />
            <h2 className='text-center text-orange-600 text-xl font-bold lg:text-2xl mt-5'>Model : {bikeName}</h2>

            <h2 className='mt-5 text-xl font-bold text-gray-600 underline'>{bikeName} Specifications:-</h2>
            <div className="overflow-x-auto border mt-10">
  <table className="table table-zebra w-full">
   
    
    <tbody>
    
      <tr>
     
        <td className='text-black font-bold'>Brand</td>
        <td className='text-orange-500 font-bold'>{brand}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Bike-Type</td>
        <td className='text-orange-500 font-bold'>{biketype}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Brakes</td>
        <td className='text-orange-500 font-bold'>{brakes}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>CC</td>
        <td className='text-orange-500 font-bold'>{cc}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Displacement</td>
        <td className='text-orange-500 font-bold'>{displacement}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Engine Type</td>
        <td className='text-orange-500 font-bold'>{enginetype}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Engine Coolings</td>
        <td className='text-orange-500 font-bold'>{enginecooling}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Font Brakes</td>
        <td className='text-orange-500 font-bold'>{frontbrake}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Gears</td>
        <td className='text-orange-500 font-bold'>{gears}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>MaxPower</td>
        <td className='text-orange-500 font-bold'>{maxpower}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Rear Brake</td>
        <td className='text-orange-500 font-bold'>{rearbrake}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Mileage</td>
        <td className='text-orange-500 font-bold'>{mileage}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Power</td>
        <td className='text-orange-500 font-bold'>{power}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Top Speed</td>
        <td className='text-orange-500 font-bold'>{topspeed}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Tyre</td>
        <td className='text-orange-500 font-bold'>{tyre}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Starting Type</td>
        <td className='text-orange-500 font-bold'>{startingtype}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Transmission Type</td>
        <td className='text-orange-500 font-bold'>{transmissiontype}</td>
        
      </tr>
      <tr>
     
        <td className='text-black font-bold'>Price</td>
        <td className='text-orange-500 font-bold'>{price} BDT</td>
        
      </tr>
     
      
      
      
    </tbody>
  </table>
</div>
            </div>
            <div  >
                <div className='w-full h-10 rounded bg-black'>
                    <h1 className='text-orange-500 text-center  text-2xl'>Booking Section</h1>
                    <Bookings
                    product={product}
                  
                    />
                </div>

            </div>
        </div>
    );
};

export default Purches;