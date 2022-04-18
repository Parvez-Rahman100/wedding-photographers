import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div >
                <h1 className='text-center text-success my-3'>Difference between authentication and authorization</h1>
                <div style={{backgroundColor : 'rgba(128, 142, 155,1.0)'}} className='d-lg-flex flex-sm-row justify-content-between'>
                <div className='border border-2 px-3 rounded'>
                    <h2>Authentication</h2>
                    <p>Authorization means who is the user.</p>
                    <p>Authentication is need at the first time . When user tried to create an account. </p>
                    <p>Authentication can be can be visible and user can change it.</p>
                    <p>Authentication check whether user is availabe or not.</p>
                </div>
                <div className='border border-2 px-3 rounded'>
                    <h2>Authorization</h2>
                    <p>Authorization means what access have an user.</p>
                    <p>Authorization is need everytime. When an user tried to access something again and again</p>
                    <p>Authorization can not be visible and user can not change it .</p>
                    <p>Authorization check what permission have an user</p>
                </div>
                </div>
            </div>
            <div className=' p-4 rounded'>
                <h3 className='text-center text-success  my-3'>Why am I using firebase? What other options do I have to implement authentication?</h3>
                <p style={{backgroundColor : 'rgba(128, 142, 155,1.0)'}} className='p-4'>Firebase auth provides secure and reliable authentication. We can implemet other authentication like fire-base hooks.It is so much easier to use and reliable.We can login , signup and signup by firebase authentication easily by changing state.</p>
            </div>
            <div className=' p-4 rounded'>
                <h3 className='text-center text-success  my-3'>What other services does firebase provide other than authentication?</h3>
                <p style={{backgroundColor : 'rgba(128, 142, 155,1.0)'}} className='p-4'>Firebase have so many features.We have firebase authentication.We can authenticate an user using email,password, google , github , facebook etc. Then we have database .We can get real time database so we can see changes in real time.We have storage features here.In firebase we have another feature that is so important . That is hosting . Hosting is so easy here. And there is a lot of features.</p>
            </div>
        </div>
    );
};

export default Blogs;