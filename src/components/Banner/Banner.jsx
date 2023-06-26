import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import bannerImg from '../../assets/images/bannerImg/logo.png'

const Banner = () => {
    const [text]= useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    return (
        <section id='home' className='w-full pt-10 pb-20 font-titleFont ms-20 lg:flex'>
            
            <LeftBanner></LeftBanner>
            <RightBanner></RightBanner>
            {/* <div className='w-1/2'>
                <img src={bannerImg} alt=""  />
            </div> */}
            
        </section>
    );
};

export default Banner;