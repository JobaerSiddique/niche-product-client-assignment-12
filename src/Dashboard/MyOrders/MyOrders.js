import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Loading from '../../Pages/Shared/Loading';
import OrdersInfo from './OrdersInfo';

const MyOrders = () => {
  // const[orders,setOrders]=useState([])
const {user,loading}=useContext(AuthContext)
const url=`https://niche-product-server-assignment-12.vercel.app/bookings?email=${user?.email}`

const {data:orders=[],refetch}=useQuery({
  queryKey:['bookings',user?.email],
  queryFn:async()=>{
    const res= await fetch(url)
    const data=await res.json();
    return data
  }
})
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setOrders(data)
    //         console.log(data)
            
    //     })
    // },[user])
    const handleDelete= id=>{
      const processd= window.confirm('Are You want delete this bookings?')
      if(processd){
        fetch(`https://niche-product-server-assignment-12.vercel.app/bookings/${id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
            toast.success('Delete This Order Successfully')
            refetch()
          }
        })
      }
    }
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-primary text-center mt-5 text-xl font-bold lg:text-5xl'>Welcome to {user.displayName}</h1>
            <h5 className='text-xl text-orange-500 mt-5 font-semibold p-3'>My Orders : {orders.length}</h5>

            <div className="overflow-x-auto mt-10">
  <table className="table w-full">
    
    <thead>
      <tr className='text-center'>
        <th>Customer Name</th>
        <th className='font-bold'>Customer Email</th>
        <th className='font-bold'>Bike Model</th>
        <th className='font-bold'>Phone</th>
        <th className='font-bold'>Price</th>
        <th className='font-bold'>Status</th>
        <th className='font-bold'></th>
      </tr>
    </thead>
    <tbody>
     
      {
       Object.values(orders).map(order=><OrdersInfo 
        key={order._id} 
        order={order}
        handleDelete={handleDelete}
        />
        )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;