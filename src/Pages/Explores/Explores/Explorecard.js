import React from 'react';
import { Link } from 'react-router-dom';

const Explorecard = ({product}) => {
    const {_id,bikeName,img,price,short}=product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{bikeName}</h2>
          <p className='text-justify'><small>{short}</small></p>
          <h4 className='text-orange-500 font-bold text-xl'>Price : <span className='text-black'>{price}</span></h4>
          <div className="card-actions ">
          <Link to={`/products/${_id}`} className="btn btn-outline w-full btn-primary">Purches {bikeName}</Link>
          </div>
        </div>
      </div>
    );
};

export default Explorecard;