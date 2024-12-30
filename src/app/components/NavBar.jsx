"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { NavLink } from './NavLink';
import { MenuOverlay } from './MenuOverlay';

const navLinks = [
    {
        title: 'About',
        path: '#about'
    }, {
        title: 'Projects',
        path: '#projects'
    }
]

export const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className='fixed border border-[#33353F] border-l-0 border-r-0 top-0 left-0 right-0 bg-[#121212] z-10'>
            <div className='mx-auto container flex flex-wrap px-4 py-2 lg:py-4 items-center justify-between'>
                <Image src='/logo.svg' width={75} height={75} alt='logo' />
                <div className='block md:hidden'>
                    {!navBarOpen ?
                        <button onClick={() => setNavBarOpen(true)} className='border rounded border-slate-200 hover:border-white px-2 py-2 flex items-center text-slate-200 hover:text-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    :
                        <button onClick={() => setNavBarOpen(false)} className='border rounded border-slate-200 hover:border-white px-2 py-2 flex items-center text-slate-200 hover:text-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    }
                </div>

                <div id="navbar" className='hidden md:block md:w-auto'>
                    <ul className='mt-0 flex p-4 md:p-0 md:flex-row md:space-x-8'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                navBarOpen ? <MenuOverlay links={navLinks} /> : ''
            }
        </nav>
    );
}
