import React from 'react';

export const SkillCard = ({ Icon, title, color }) => {
    return (
        <div className='text-center'>
            <div className='flex flex-col justify-center items-center bg-[#181818] h-24 w-24 rounded-full'>
                <Icon className='h-20 w-20' color={color} />   
            </div>
            <p className='mt-1 text-[#ADB7BE] text-base justify-self-center'>{title}</p>
        </div>
    )
}
