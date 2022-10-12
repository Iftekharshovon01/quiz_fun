import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-100 bg-red-100'>
            <Link to='/'>Quiz Fun!</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/stastics'>Graph</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Nav;