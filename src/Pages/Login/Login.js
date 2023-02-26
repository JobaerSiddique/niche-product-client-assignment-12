import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import img from "../../images/banner/92585606.jpg"
import img2 from "../../images/Login/login.jpg"
import Loading from '../Shared/Loading';
const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { login,loading, googleLog} = useContext(AuthContext)
  let location = useLocation();
  const navigate = useNavigate()
  const [createEmail,setCreateEmail]=useState('')
  let from = location.state?.from?.pathname || "/products/:id";
  const handleLogin = (data) => {
    
    login(data.email,data.password)
    .then((result)=>{
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });
    })  
   
  };
  const handleGoogle = ()=>{
    googleLog()
    .then((result)=>{
      
      const user= result.user;
      if(user?.uid){
        toast.success('Login Successfully')
        navigate(from, { replace: true });
      }
      else{
        const email=user.email
      const googleUser={
         name:user.displayName,
       email:user.email
      }
      
      fetch('https://niche-product-server-assignment-12.vercel.app/users',{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(googleUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setCreateEmail(email)
        toast("User Create Successfully")
      
      
      })
      
      navigate(from, { replace: true });
      }
      
    })
  }  
   if(loading){
    return <Loading/>
   }
  
  return (
        <div>
           <div >
           <div className="hero h-80" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h3 className="mb-5 text-5xl font-bold">Welcome To Login</h3>
      
    </div>
  </div>
</div>
           </div>
           <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img className='ml-5' src={img2} alt="" />
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
   
  </label>
  <input type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required:{
    value:true,
    message:"Email is required"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.email?.type==="required" && <span className='text-rose-600 mt-3'>{errors.email?.message}</span>}
  
</div>
        <div className="form-control w-full max-w-xs mt-3">
  <label className="label">
    <span className="label-text">Password</span>
   
  </label>
  <input type="password" 
  placeholder="Enter Your Password" 
  {...register("password", { required:{
    value:true,
    message:"Password is required"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.password?.type==="required" && <span className='text-rose-600 mt-3'>{errors.password?.message}</span>}

  
</div>
<input type="submit" className='btn btn-outline btn-warning w-full max-w-xs mt-10' value="Login" />

<p className='mt-5'>Have A New for Bike Point?  <Link to="/signup" className='text-blue-500'>Please SignUp</Link></p>
<div className="divider">OR</div>
<input onClick={handleGoogle} type="submit" className='btn btn-outline btn-primary w-full max-w-xs mt-10' value="Google" />
        </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;