import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import BestSelling from '../components/home/BestSelling';

function HomePage() {
    return (
        <div className='pt-20 max-w-7xl mx-auto flex flex-col gap-7'>
            <HeroSection />
            <CategorySection />
            <BestSelling/>
        </div>
    );
}

export default HomePage;