import React from 'react';
import { Link } from 'react-router-dom';

const ManageCardInfo = ({product,handleDeleteProducts}) => {
    const {_id,bikeName,img,price,short}=product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-cyan-500">{bikeName}</h2>
          <p className='text-justify'><small>{short}</small></p>
          <h4 className='text-orange-500 font-bold text-xl'>Price : <span className='text-black'>{price}</span></h4>
          <div className="card-actions ">
            <button onClick={()=> handleDeleteProducts(_id)} className='btn btn-outline btn-info w-full'>Delete This Bikes</button>
          </div>
        </div>
      </div>
    );
};

export default ManageCardInfo;