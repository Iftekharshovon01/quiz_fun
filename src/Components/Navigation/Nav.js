import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-100 bg-red-100 font-bold text-black-800 '>
            <Link className='px-20' to='/'>Quiz Fun!</Link>
            <Link className='px-20' to='/topics'>Topics</Link>
            <Link className='px-20' to='/stastics'>Graph</Link>
            <Link className='px-20' to='/blog'>Blog</Link>
        </div>
    );
};

export default Nav;