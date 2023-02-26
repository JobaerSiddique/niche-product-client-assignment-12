import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageAllOrders = () => {
   
  
    const {data:orders=[],refetch}=useQuery({
    queryKey:['bookings'],
    queryFn:async()=>{
        const res= await fetch('https://niche-product-server-assignment-12.vercel.app/bookings')
        const data=await res.json();
        return data
      }
    
   })

   const handleApprove = id=>{
    fetch(`https://niche-product-server-assignment-12.vercel.app/bookings/${id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'Shipped'})
    })
    .then(res=>res.json())
    .then(update=>{
        console.log('update order',update)
        if(update.modifiedCount>0){
            
            toast.success('Status Approved')
            refetch()
        }
    })
   }

   const handleRejectOrder = id=>{
    fetch(`https://niche-product-server-assignment-12.vercel.app/bookings/${id}`,{
      method:"PUT",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify({status:'Rejected'})
  })
  .then(res=>res.json())
  .then(update=>{
      console.log('update order',update)
      if(update.modifiedCount>0){
          
          toast.success('Status Rejected')
          refetch()
      }
  })
   }
   
    return (
        <div>
            <h1>All Orders : {orders.length}</h1>
            <div className="overflow-x-auto mt-10">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Bike Model</th>
        <th>Price</th>
        <th>Apporved</th>
      </tr>
    </thead>
    <tbody>
     
      {
        orders.map((order,i)=><tr key={order._id}>
            <th>{i+1}</th>
            <td>{order.customerName}</td>
            <td>{order.email}</td>
            <td>{order.bikeModel}</td>
            <td>{order.price}</td>
            <td>{order?.status? <span className='text-purple-500 font-bold'>Confired</span>: <button onClick={()=> handleApprove(order._id)} className='btn btn-xs btn-primary'>Approved</button>}</td>
            <td> <button onClick={()=> handleRejectOrder(order._id)} className='btn btn-xs btn-warning'>Rejected</button></td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageAllOrders;