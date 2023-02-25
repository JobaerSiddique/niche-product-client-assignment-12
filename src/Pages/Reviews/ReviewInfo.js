import React from 'react';
import { RiStarSFill} from "react-icons/ri";
const ReviewInfo = ({rev}) => {
    const {name,bikemodel,review,rating}= rev
    console.log(rev)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{bikemodel}</p>
    <p>{review}</p>
  
    
  </div>
</div>
    );
};

export default ReviewInfo;