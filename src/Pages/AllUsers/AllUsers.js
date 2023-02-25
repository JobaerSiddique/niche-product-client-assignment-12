import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
          const res= await fetch('https://niche-product-server-assignment-12.vercel.app/users')
          const data=await res.json();
          return data
        }
      })

      const handleAdmin = id=>{
        fetch(`https://niche-product-server-assignment-12.vercel.app/users/admin/${id}`,{
            method:"PUT",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success("Welcome to Admin Panel")
                refetch()
            }
            toast.error('failed')
        })
      }
    return (
        <div>
            <h1 className='text-xl text-purple-600 font-semibold'>Users : {users.length}</h1>

            <div className="overflow-x-auto mt-10">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={()=>handleAdmin(user._id)} className='btn btn-xs btn-info'>Make Admin</button>}</td>
            <td><button className='btn btn-xs '>Delete</button></td>
          </tr>)
     }
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUsers;