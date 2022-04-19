import React from "react";
import {FiLinkedin} from 'react-icons';
import {BsGithub} from 'react-icons';
import {FiDribbble} from 'react-icons';

const HeaderSocials = () => {
return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><FiLinkedin/></a> 
        <a href="https://github.com" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://dribble.com" target='_blank' rel="noreferrer"><FiDribbble /></a>
    </div>
    ) 
}
export default HeaderSocials