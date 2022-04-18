import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div  className='bg-primary p-3'>
            <h2 className='text-center text-white'>Wedding Photographer's Vision</h2>
            <h3 className='text-center text-white'>Copyright &copy; {year}</h3>
        </div>
    );
};

export default Footer;