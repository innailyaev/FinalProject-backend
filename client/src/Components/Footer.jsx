import React from 'react';
import '../CSS/Footer.css'; 
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className='footer'>
            Copyright © 2021 Inna Ilyaev
            <a href="https://www.linkedin.com/in/inna-ilyaev" target="_blank" rel="noreferrer"> 
                <AiFillLinkedin className='icon' /> 
            </a> 
            <a href="https://github.com/innailyaev" target="_blank" rel="noreferrer"> 
                <AiFillGithub className='icon' />
            </a>
        </div>
    )
}
