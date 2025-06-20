import React from 'react';

const Header = () => {
    return (
        <header className='w-full h-24 bg-black bg-opacity-10 backdrop-blur-sm fixed z-10 flex flex-col justify-center items-center'>
            <h1 className='font-black text-5xl'>RAF</h1>
            <h2 className='text-xl font-light tracking-wider'>Menu</h2>
        </header>
    );
};

export default Header;