import React from 'react';
import img1 from "../../images/banner/92585606.jpg"
import img2 from "../../images/banner/Image_1_-_Suzuki_INTRUDER_BS6_1584705865889_1655437980453.jpg"
import img3 from "../../images/banner/yzf-r15-right-front-three-quarter-12.jpg"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='img-gradient w-full'>
    <img src={img1} className="w-full" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute   transform -translate-y-1/2 left-10 right-8 top-1/4">
      <h1 className='text-orange-500 font-bold text-5xl'> Zontes ZT155 U </h1>
      <p className='w-1/2 mt-5 text-white text-justify'><small>Zontes is the new talk of the town. People are getting crazy over this new brand that is about to enter Bangladesh. One of the most hyped bikes of Zontes is the Zontes ZT155-U. The Zontes ZT155-U is a street fighter that is fighting its way into the hearts of potential future Zontians. The Zontes brand has also got us at BikeBD excited, hence here we will be overviewing the Zontes ZT155-U.</small></p>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
   <div className='img-gradient w-full'>
   <img src={img2} className="w-full" />
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide1" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute    transform -translate-y-1/2 left-20 right-8 top-1/4">
      <h1 className='text-orange-500 font-bold text-5xl'> Suzuki Intruder FI ABS</h1><br />
      <p className='w-1/2 mt-5 text-white text-justify'><small>The Suzuki Intruder FI ABS is an exciting bike to look at. The bike's overall length is 2130 mm, while the width and height are 805 mm and 1095 mm, respectively. The bike has an 11L fuel tank, and the bike's overall weight is 148 kg. The styling, as well as the fit and finish, feels quite nice</small></p>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className='img-gradient w-full'>
    <img src={img3} className="w-full" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide2" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute   transform -translate-y-1/2 left-10 right-8 top-1/4">
      <h1 className='text-orange-500 font-bold text-5xl '> Yamaha R15 V4</h1>
      <p className='w-1/2 mt-5 text-white text-justify '><small>The Yamaha R15 V4 was designed for the entry-level racing experience; hence the seat height of the bike is kept quite high at 815mm. The bike also has an average ground clearance of 170mm. The bike is also sporty; hence the height can be justified. The sporty look also incorporates clip-on, which makes it rather an aggressive postured bike. 

</small></p>
    </div>
  </div> 
  
</div>
    );
};

export default Banner;