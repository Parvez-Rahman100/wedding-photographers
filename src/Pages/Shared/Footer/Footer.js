import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{height : '100vh'}}>
            <h2 className='text-center text-primary mt-5'>Copyright &copy; {year}</h2>
        </div>
    );
};

export default Footer;