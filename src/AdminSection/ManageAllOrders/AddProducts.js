import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddProducts = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imageKey= process.env.REACT_APP_image_key
  const handleAddBike = (data) => {
    
    const image= data.file[0]
    const formData = new FormData();
    formData.append('image', image);
    const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`
    fetch(url,{
      method:"POST",
      body: formData
    })
    .then(res=>res.json())
    .then(image=>{
      console.log(image.data.url)
      const imageHost=image.data.url
      const addBike={
        bikeName:data.bikeName,
        cc:data.cc,
        power:data.power,
        torque:data.torque,
        mileage:data.mileage,
        brakes:data.brakes,
        tyre:data.tyre,
        brand:data.brand,
        biketype:data.biketype,
        displacement:data.displacement,
        maxpower:data.maxpower,
        enginecooling:data.enginecooling,
        gears:data.gears,
        topspeed:data.topspeed,
        img:imageHost,
        price:data.price,
        short:data.short,
        clutchtype:data.clutchtype,
        enginetype:data.enginetype,
        frontbrake:data.frontbrake,
        rearbrake:data.rearbrake,
        startingtype:data.startingtype,
        transmissiontype:data.transmissiontype
        }
        console.log('addBike',addBike)
        fetch('http://localhost:5000/products',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(addBike)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('insert database',data)
          if(data.acknowledged){
            toast.success("successfully Added")
           
          }
        })
    })

  }; 
  
  return (
        <div className='p-4 bg-rose-300' >
           
            <h1 className='text-purple-500 text-center mt-5 font-bold text-xl lg:text-3xl '>Welcome Admin Please Add A New Bikes</h1>
           <div className='mt-5' >
           <div className="card w-full glass">
  
  <div className="card-body ">
   <form onSubmit={handleSubmit(handleAddBike)}>
   <div className='grid gap-10 grid-cols-1  lg:grid-cols-2'>
    <div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-bold">Bike Name</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike Name" 
  {...register("bikeName", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
{errors.bikeName?.type === "required" && <span className='text-blue-500 mt-4'>{errors.bikeName?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Power</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike Power" 
  {...register("power", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.power?.type === "required" && <span className='text-blue-500 mt-4'>{errors.power?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Mileage</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike mileage" 
  {...register("mileage", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.mileage?.type === "required" && <span className='text-blue-500 mt-4'>{errors.mileage?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Tyre
</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike tyre" 
  {...register("tyre", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.tyre?.type === "required" && <span className='text-blue-500 mt-4'>{errors.tyre?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Biketype</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike biketype"
  {...register("biketype", { required: {
    value:true,
    message:"Please Add This"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.biketype?.type === "required" && <span className='text-blue-500 mt-4'>{errors.biketype?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Maxpower</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike maxpower"
  {...register("maxpower", { required: {
    value:true,
    message:"Please Add This"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.maxpower?.type === "required" && <span className='text-blue-500 mt-4'>{errors.maxpower?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Gears</span>
  </label>
  <input type="number" 
  placeholder="Enter Bike gears" 
  {...register("gears", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.gears?.type === "required" && <span className='text-blue-500 mt-4'>{errors.gears?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Image</span>
  </label>
  <input type="file" 
  placeholder="Enter image" 
  {...register("file", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.image?.type === "required" && <span className='text-blue-500 mt-4'>{errors.image?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Short Description</span>
  </label>
  <input type="text" 
  placeholder="Enter short description" 
  {...register("short", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.short?.type === "required" && <span className='text-blue-500 mt-4'>{errors.short?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Enginetype</span>
  </label>
  <input type="text" 
  placeholder="Enter enginetype"
  {...register("enginetype",{ required: {
    value:true,
    message:"Please Add This"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.enginetype?.type === "required" && <span className='text-blue-500 mt-4'>{errors.enginetype?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Rearbrake</span>
  </label>
  <input type="text" 
  placeholder="Enter rearbrake" 
  {...register("rearbrake", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.rearbrake?.type === "required" && <span className='text-blue-500 mt-4'>{errors.rearbrake?.message}</span>}
  
</div>
<div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Transmissiontype</span>
  </label>
  <input type="text" 
  placeholder="Enter transmissiontype" 
  {...register("transmissiontype", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.transmissiontype?.type === "required" && <span className='text-blue-500 mt-4'>{errors.transmissiontype?.message}</span>}
  
</div>

    </div>
    <div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-bold">Bike CC</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike CC" 
  {...register("cc", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.cc?.type === "required" && <span className='text-blue-500 mt-4'>{errors.cc?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Torque</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike Torque" 
  {...register("torque", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.torque?.type === "required" && <span className='text-blue-500 mt-4'>{errors.torque?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Brakes</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike brakes" 
  {...register("brakes", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.brakes?.type === "required" && <span className='text-blue-500 mt-4'>{errors.brakes?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Brand</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike brand" 
  {...register("brand", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.brand?.type === "required" && <span className='text-blue-500 mt-4'>{errors.brand?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Displacement</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike displacement" 
  {...register("displacement", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.displacement?.type === "required" && <span className='text-blue-500 mt-4'>{errors.displacement?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Enginecooling</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike enginecooling" 
  {...register("enginecooling", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.enginecooling?.type === "required" && <span className='text-blue-500 mt-4'>{errors.enginecooling?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Topspeed</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike topspeed" 
  {...register("topspeed",{ required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.topspeed?.type === "required" && <span className='text-blue-500 mt-4'>{errors.topspeed?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Price</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike price" 
  {...register("price", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.price?.type === "required" && <span className='text-blue-500 mt-4'>{errors.price?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Clutchtype</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike Clutchtype" 
  {...register("clutchtype", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.clutchtype?.type === "required" && <span className='text-blue-500 mt-4'>{errors.clutchtype?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Frontbrake</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike frontbrake" 
  {...register("frontbrake", { required: {
    value:true,
    message:"Please Add This"
  } })}
  className="input input-bordered w-full max-w-xs" />
  {errors.frontbrake?.type === "required" && <span className='text-blue-500 mt-4'>{errors.frontbrake?.message}</span>}
  
</div>
    <div className="form-control w-full max-w-xs mt-2">
  <label className="label">
    <span className="label-text font-bold">Bike Startingtype</span>
  </label>
  <input type="text" 
  placeholder="Enter Bike startingtype"
  {...register("startingtype", { required: {
    value:true,
    message:"Please Add This"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.startingtype?.type === "required" && <span className='text-blue-500 mt-4'>{errors.startingtype?.message}</span>}
  
</div>
    </div>
   
   </div>
   <input className='btn btn-primary w-full mt-5' type="submit" value="Add Bike" />
   </form>
  </div>
</div>
           </div>
        </div>
    );
};

export default AddProducts;