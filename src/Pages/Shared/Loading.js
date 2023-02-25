import React from 'react';
import img from "../../images/Safir.png"
const Loading = () => {
    return (
        <div>
            <div class="flex items-center justify-center h-screen ">
    <div class="w-40 h-40 rounded-full animate-pulse"><img src={img} alt="" /></div>
</div>
        </div>
    );
};

export default Loading;