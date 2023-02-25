import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import review from '../../images/review.png'
import Loading from '../../Pages/Shared/Loading';
const MyReview = () => {
    const {user,loading}=useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
  const handleReview = (data) => {
   console.log(data)
    const reviewInfo={
        name:data.name,
        email:data.email,
        bikemodel:data.bike,
        review:data.review,
        rating:data.rating
    }
    fetch('https://niche-product-server-assignment-12.vercel.app/reviews',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(reviewInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            toast("Thanks For Your Reviews")
        }
    })
};
    if(loading){
        return <Loading/>
    }

    
    return (
        <div className='mt-5'>
          
            <div className="hero h-80" style={{ backgroundImage: `url(${review})` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Reviews</h1>
      
    </div>
  </div>
</div>
<div className='w-full h-12 bg-slate-600 mt-10'>
        <h1 className='text-center text-xl  font-bold text-orange-500 p-2'>Please Write Your Review</h1>
</div>

<div>
    <form onSubmit={handleSubmit(handleReview)}>
    <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input 
  type="text" 
  placeholder="Enter Your Name" 
  Value={user?.displayName}
  {...register("name", { required: "Email Address is required" })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input 
  type="email" 
  placeholder="Enter Your Email" 
  Value={user?.email}
  {...register("email", { required: "Email Address is required" })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='text-rose-500 mr-1'>*</span>Bike Model</span>
  </label>
  <input 
  type="text" 
  placeholder="Enter Bike Model" 
  {...register("bike", { required: "Bike model is required" })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Review Here</span>
    
  </label>
  <textarea 
  className="textarea textarea-bordered h-24" 
  {...register("review", { required: "review is required" })}
  placeholder="Write Your Review"></textarea>
  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='text-rose-500 mr-1'>*</span>Rating</span>
  </label>
  <input 
  type="number" 
  placeholder="Please Enter Your Rating (0-5) " 
  {...register("rating", { required: {
    value:true
  },
maxLength:{
  value:1,
  message:"only one can be used value(0-5) digits "
}
})}
  className="input input-bordered w-full max-w-xs" />
  {errors?.rating?.type === 'required' && <span className='text-rose-500 mt-3'>{errors?.rating?.message}</span>}
  {errors?.rating?.type === 'maxLength' && <span className='text-rose-500 mt-3'>{errors?.rating?.message}</span>}
  
</div>
<input className='btn btn-primary  mt-4' type="submit" value="Review submit" />
  </div>
 
</div>
    </form>
</div>
        </div>
    );
};

export default MyReview;