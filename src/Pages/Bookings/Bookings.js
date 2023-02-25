import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Bookings = ({product}) => {
   const {user}= useContext(AuthContext)
   const{bikeName,img,biketype,brakes,cc,displacement,enginetype,enginecooling,frontbrake,gears,maxpower,rearbrake,mileage,power,topspeed,tyre,startingtype,transmissiontype,price,brand}= product
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleBooking = data => {
    console.log(data)
    const bookings ={
      customerName:data.name,
     email:data.email,
      phone:data.phone,
      bikeModel:data.model,
      price:data.price,
      Address:data.address,
      status:''
    }
    fetch('https://niche-product-server-assignment-12.vercel.app/bookings',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookings)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success(`${bikeName} bookings Successfully`)
      
    })
    
  };
   
   
   return (
        <div className="card w-full bg-base-100 shadow-xl p-5 mt-10 ">
            <form onSubmit={handleSubmit(handleBooking)} >
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Customer Name</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  value={user?.displayName}
 {...register("name", { 
  required: {
    value:true,
    message:'Name Must be Required'
  } 
})} 
  className="input input-bordered w-full max-w-xs" />
  {errors.name?.type === 'required' && <p className='text-rose-500 mt-3'>{errors.name?.message}</p>}
</div>
            <div className="form-control w-full max-w-xs mt-5">
  <label className="label">
    <span className="label-text">Customer Email</span>
    
  </label>
  <input 
  type="email" 
  placeholder="Type here" 
  value={user?.email}
  {...register("email", { required: true })} 
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs mt-5">
  <label className="label">
    <span className="label-text">Phone</span>
    
  </label>
  <input 
  type="number" 
  placeholder="Enter Your Phone Number" 
  {...register("phone", { required:{
    value:true
  },
  maxLength:{
    value:11,
    message:"Must be 11 Characters phone Number"
  }
  
  })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.phone?.type === 'required'&& <span className='text-rose-500 mt-3'>{errors.phone?.message}</span>}
  {errors.phone?.type === 'maxLength'&& <p className='text-rose-500 mt-3'>{errors.phone?.message}</p>}
</div>
            <div className="form-control w-full max-w-xs mt-5">
  <label className="label">
    <span className="label-text">Bike Model</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Enter Your Phone Number" 
  value={bikeName}
  {...register("model", { required: true })} 
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs mt-5">
  <label className="label">
    <span className="label-text">Price</span>
    
  </label>
  <input 
  type="text" 
  placeholder="" 
  value={price}
  {...register("price", { required: true })} 
  className="input input-bordered w-full max-w-xs" />
  
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Address</span>
   
  </label>
  <textarea 
  className="textarea textarea-bordered h-24" 
  {...register("address", { required: true })} 
  placeholder="address"/>
 
</div>
<input className='mt-5 btn btn-outline btn-success w-full max-w-xs' type="submit" value="Bookings" />
            </form>
</div>
    );
};

export default Bookings;