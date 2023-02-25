import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReviewInfo from './ReviewInfo';

const Reviews = () => {
    // const [review,setReview]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/reviews')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setReview(data)
    //     })
    // },[])
    const {data:review=[]}=useQuery({
        queryKey:['review'],
        queryFn:async()=>{
            const res= await fetch('https://niche-product-server-assignment-12.vercel.app/reviews')
            const data = res.json()
            return data
           
        }
    })
    return (
        <div>
            <h2 className='text-center text-xl lg:text-5xl font-bold mt-20 lg:mt-10'>Customers Reviews</h2>
            <div className='grid gap-20 grid-rows-1 lg:grid-cols-3 mt-5 mb-5 '>
                {
                    review.map(rev=><ReviewInfo
                    key={rev._id}
                    rev={rev}
                    ></ReviewInfo>)
                }
            </div>
        
</div>
        
    );
};

export default Reviews;