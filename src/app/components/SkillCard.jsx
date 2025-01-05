import React from 'react';

export const SkillCard = ({ Icon, title, color, dimension = 20 }) => {
    return (
        <div className='text-center'>
            <div className='flex flex-col justify-center items-center bg-[#1C1B21] h-24 w-24 rounded-full'>
                <Icon className={`h-${dimension} w-${dimension}`} color={color} />   
            </div>
            <p className='mt-1 text-[#ADB7BE] text-base justify-self-center'>{title}</p>
        </div>
    )
}
