import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        fetch('https://niche-product-server-assignment-12.vercel.app/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-center text-xl font-bold mt-10  lg:text-5xl underline'>Our Bikes</h1>
          <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
            {
                products.slice(0,6).map(product=><Product
                product={product}
                key={product.id}
                >

                </Product>)
            }
          </div>
        </div>
    );
};

export default Products;