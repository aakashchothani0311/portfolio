import React from 'react'

export const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7'>
                    <h1 className='text-white mb-4 text:4xl lg:text-6xl font-extrabold'>Greetings. I am AAKASH</h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi eius facilis neque veritatis amet voluptatibus. Exercitationem laboriosam aliquid quis alias illum maiores obcaecati, inventore cupiditate dolore possimus vero vitae!
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full bg-white hover:bg-slate-200'>Resume</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>

                    </div>
                </div>
            </div>
        </section>
    );
}
