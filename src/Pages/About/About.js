import React from 'react';
import me from '../../images/me/me.jpg';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="d-lg-flex flex-sm-row justify-content-center align-items-center">
                    <div className='my-5'>
                        <img style={{width : '500px'}} className='rounded ' src={me} alt="" />
                    </div>
                    <div className='my-5'>
                        <h2>Hi I am <span className='text-danger'>Parvez Rahman</span></h2>
                        <p>I am a student of national university. I am currently studying at Tejgaon College in Computer Science and Technology . My goal is to be a full stack developer . I am trying hard as much I can , so that I can have a web developer job.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;