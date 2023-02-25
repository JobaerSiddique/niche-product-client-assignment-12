import React, { useEffect, useState } from 'react';
import Explorecard from './Explorecard';

const Explores = () => {
    const [explores,setExplores]= useState([])

    useEffect(()=>{
        fetch('https://niche-product-server-assignment-12.vercel.app/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setExplores(data)
        })
    },[])
    
    return (
        <div>
            <h1 className='text-center text-xl font-bold mt-10 lg:text-5xl underline'>Explores Our Bikes</h1>
          <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
            {
               explores.map(product=><Explorecard
                product={product}
                key={product.id}
                >

                </Explorecard>)
            }
          </div>
        </div>
    );
};

export default Explores;