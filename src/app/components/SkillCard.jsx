import React from 'react';

export const SkillCard = ({ Icon, title, color, dimension=20 }) => {
    const mobileDimension = dimension / 2;

    return (
        <div className='text-center'>
            <div className='flex flex-col justify-center items-center bg-[#1C1B21] h-12 w-12 sm:h-24 sm:w-24 rounded-full'>
                <Icon className={`hidden sm:flex h-${dimension} w-${dimension}`} color={color} />
                <Icon className={`h-${mobileDimension} w-${mobileDimension} sm:hidden`} color={color} />   
            </div>
            <p className='mt-1 text-[#ADB7BE] text-xs sm:text-base justify-self-center'>{title}</p>
        </div>
    )
}
