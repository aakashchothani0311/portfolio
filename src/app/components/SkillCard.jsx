import React from 'react';

export const SkillCard = ({ Icon, title, color, dimension=20 }) => {
    return (
        <div className='text-center'>
            <div className='flex flex-col justify-center items-center bg-[#1C1B21] h-12 w-12 sm:h-24 sm:w-24 rounded-full'>
                <Icon className={`h-${dimension/2} w-${dimension/2} sm:h-${dimension} sm:w-${dimension}`} color={color} />   
            </div>
            <p className='mt-1 text-[#ADB7BE] text-xs sm:text-base justify-self-center'>{title}</p>
        </div>
    )
}
