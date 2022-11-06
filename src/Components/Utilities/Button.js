import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-orange-600 text-white text-xl font-semibold font-[Poppins] py-1 px-4 md:ml-2 hover:bg-cyan-800 duration-500 rounded'>{children}</button>
    );
};

export default Button;