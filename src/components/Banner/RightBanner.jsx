import React from 'react';
import bannerImg from '../../assets/images/bannerImg/logo.png'
const RightBanner = () => {
    return (
        <div className="w-full lg:w-1/2 flex justify-center  items-center relative">
        <img
          className="w-[300px] h-[400px] lg:w-[500px] lg:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lg:w-[500px] lg:h-[500px]  flex justify-center items-center"></div>
      </div>
    );
};

export default RightBanner;