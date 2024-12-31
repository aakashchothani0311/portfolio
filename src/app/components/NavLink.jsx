import Link from 'next/link';

export const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className='py-2 pl-3 pr-4 md:p-0 block text-[#ADB7BE] hover:text-white sm:text-xl'>
            {title}
        </Link>
    );
}
