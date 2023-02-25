import React from 'react';

const OrdersInfo = ({order, handleDelete}) => {
    const {_id,customerName,bikeModel,email,phone,price,status} = order
    return (
        <tr className='hover text-center' >
        
        <td className='font-bold'>{customerName}</td>
        <td>{email}</td>
        <td  className='font-bold'>{bikeModel}</td>
        <td>{phone}</td>
        <td  className='font-bold'>{price} </td>
        <td className='font-bold'>{status? status:<span className='text-rose-500'>Pending</span>}</td>
         {status !== 'Shipped' && <td onClick={()=> handleDelete(_id)} ><button  className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>}
      </tr>
    );
};

export default OrdersInfo;