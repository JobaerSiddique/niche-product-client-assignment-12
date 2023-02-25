import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ManageCardInfo from './ManageCardInfo';


const ManageProdects = () => {
    // const [products,setProducts]= useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setProducts(data)
    //     })
    // },[])

    const {data:products=[],refetch}=useQuery({
        queryKey:['products'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/products')
            const data= await res.json()
            return data
        }
    })

    const handleDeleteProducts=id=>{
        const agree = window.confirm("Are you want to delete This Products")
        if(agree){
            fetch(`http://localhost:5000/products/${id}`,{
                method:"delete"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    toast.success("Successfullly Deleted Products")
                    refetch()
                }
            })
        }
    }
    return (
        <div className='p-5'>
            
          <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20'>
            {
                products.map(product=><ManageCardInfo
                product={product}
                key={product.id}
                handleDeleteProducts={handleDeleteProducts}
                >

                </ManageCardInfo>)
            }
          </div>
        </div>
    );
};

export default ManageProdects;