import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className=' bg-blue-100 text-yellow-800'>
            <Marquee>
       <h1 className='text-2xl'> New Arrivals: Full Metal Alchemist Brotherhood | Special discount on membership</h1>
      </Marquee>
        </div>
    );
};

export default MarqueeSection;