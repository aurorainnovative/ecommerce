import React from 'react';

function CategorySection() {
    const categories = [
        {
            id: 1,
            name: "Men",
            image: "/images/categories/men.jpg",
        },
        {
            id: 2,
            name: "Women",
            image: "/images/categories/women.jpg",
        },
        {
            id: 3,
            name: "Kids",
            image: "/images/categories/kids.jpg",
        },
        {
            id: 4,
            name: "Footwear",
            image: "/images/categories/footwear.jpg",
        },
        {
            id: 5,
            name: "Accessories",
            image: "/images/categories/accessories.jpg",
        },
        {
            id: 6,
            name: "Watches",
            image: "/images/categories/watches.jpg",
        },
        {
            id: 7,
            name: "Bags",
            image: "/images/categories/bags.jpg",
        },
        {
            id: 8,
            name: "Sportswear",
            image: "/images/categories/sportswear.jpg",
        },
        {
            id: 9,
            name: "Ethnic Wear",
            image: "/images/categories/ethnic.jpg",
        },
        {
            id: 10,
            name: "Winter Collection",
            image: "/images/categories/winter.jpg",
        }
    ];

    return (
        <div className='min-h-16 py-3 w-full flex items-center justify-center gap-7 flex-wrap'>
            {
                categories.map((category) => <div key={category.id} className='flex flex-col items-center justify-center gap-1'>
                    <div className='h-16 w-16 rounded-full bg-red-600'></div>
                    <h4 className='text-xl font-semibold'>{category.name}</h4>
                </div>)
            }
        </div>
    );
}

export default CategorySection;