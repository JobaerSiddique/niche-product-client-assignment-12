import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import signup from "../../../images/Login/signUp (2).jpg"
import img from "../../../images/banner/yzf-r15-right-front-three-quarter-12.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { toast } from 'react-hot-toast';
import UseToken from '../../../hooks/UseToken';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location=useLocation()
    const { createUser,updateUser,googleLog,loading} = useContext(AuthContext)
    let from = location.state?.from?.pathname ||"/"||'/products/:id';
    const navigate=useNavigate()
    const [createEmail,setCreateEmail]=useState('')
    const[token]=UseToken(createEmail)
    const imageKey=process.env.REACT_APP_image_key
      console.log('key',imageKey)
    if(token){
        navigate(from, { replace: true });
    }
    const handleLogin = (data) => {
      
      
      createUser(data.email,data.password)
      .then((result)=>{
        const user = result.user;
        console.log('users Info',user)
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
        const userInfo ={
          displayName:data.name,
          photoURL: imageHost

        }
        console.log(userInfo)
        updateUser(userInfo)
        .then(()=>{
          saveUser(data.name,data.email)
          
          
        })
        .catch((error) => {
         console.log(error)
        });
      })
        
        
       
      })

      const saveUser= (name,email)=>{
        const user= {name,email}
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setCreateEmail(email)
          toast("User Create Successfully")
        
        
        })
      }

     
      
     
    };
    const handleGoogle = ()=>{
      googleLog()
      .then((result)=>{
        
        const user= result.user;
        console.log(user)
        
        navigate(from, { replace: true });
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
      <h1 className="mb-5 text-5xl font-bold">Welcome To SignUp</h1>
      
    </div>
  </div>
</div>
           </div>
           <div className="hero h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img className='ml-5' src={signup} alt="" />
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
   
  </label>
  <input type="text" 
  placeholder="Enter Your Name" 
  {...register("name", { required:{
    value:true,
    message:"Name is required"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.name?.type==="required" && <span className='text-rose-600 mt-3'>{errors.name?.message}</span>}
  
</div>
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
        <div className="form-control w-full max-w-xs mt-3">
  <label className="label">
    <span className="label-text">Profile Photo</span>
   
  </label>
  <input type="file" 
  placeholder="Enter Your Password" 
  {...register("file", { required:{
    value:true,
    message:"Image is required"
  } })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.file?.type==="required" && <span className='text-rose-600 mt-3'>{errors.file?.message}</span>}

  
</div>
<input type="submit" className='btn btn-outline btn-warning w-full max-w-xs mt-10' value="SignUp" />

<p className='mt-5'>Already Have An Account ? <Link to="/login" className='text-blue-500'>Please Login</Link></p>
<div className="divider">OR</div>

        </form>
        <input onClick={handleGoogle} type="submit" className='btn btn-outline btn-primary w-full max-w-xs mt-5' value="Google" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;