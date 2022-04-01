import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
            {/* <Link to="/home">Home</Link>
            <Link to="/friend">Friend</Link>
            <Link to="/about">About</Link> */}


            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/friend">Friend</CustomLink>
            <CustomLink to="/posts">Post</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;