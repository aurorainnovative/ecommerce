import React from 'react';

function HeroBannerCard({banner}) {
    return (
        <div className='max-h-[90vh]'>
            <img src={banner?.image} alt="banner" className='w-full h-full object-contain' />
        </div>

    );
}

export default HeroBannerCard;