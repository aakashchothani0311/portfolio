import React from 'react'
import { NavLink } from './NavLink'

export const MenuOverlay = ({ links, closeNav }) => {
    return (
        <ul className='flex flex-col py-4 items-center sm:hidden'>
            {
                links.map((link, index) => (
                    <li key={index} onClick={closeNav}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))
            }
        </ul>
    );
}
