import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getActiveSection } from '../redux/activeSection-slice';

export const NavLink = ({ href, title }) => {
    const activeSection = useSelector(getActiveSection);
    const textColor = activeSection == title ? 'text-pink-500' : 'text-[#ADB7BE]';
    
    return (
        <Link href={href} className={`py-2 pl-3 pr-4 md:p-0 block ${textColor} sm:text-xl`}>
            {title}
        </Link>
    );
}
