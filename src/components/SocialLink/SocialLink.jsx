import React from 'react';
import './SocialLink.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLink = () => {
    return (
        <div className=''> 
        <div className='social-link '>
             <a href="https://www.facebook.com/profile.php?id=100007887480875" target='_blank' className='flex justify-center items-center'><FaFacebook className='font-social'></FaFacebook></a>
             <a href="https://www.linkedin.com/in/md-akashuzzaman-riaz-6ba744280/" target='_blank' className='flex justify-center items-center'><FaLinkedin className='font-social'></FaLinkedin></a>
             <a href="https://github.com/AkashRiaz" target='_blank' className='flex justify-center items-center'><FaGithub className='font-social'></FaGithub></a>
             <a href="https://www.linkedin.com/in/md-akashuzzaman-riaz-6ba744280/" target='_blank' className='flex justify-center items-center'><FaLinkedin className='font-social'></FaLinkedin></a>
        </div>
    </div>
    );
};

export default SocialLink;