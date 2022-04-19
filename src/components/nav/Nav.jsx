/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BsBookHalf} from "react-icons/bs";
import {AiOutlineCustomerService} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
return (
    <nav>

        <a 
        
        href="#" 
        onClick={() => setActiveNav('#')}  
        className={activeNav === '#' ? 'active' : ' ' }>
            <AiOutlineHome/>
        
        </a>

        <a 
        href="#about"
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#' ? 'active' : ' ' }
        >
            <AiOutlineUser/>
            
        </a>

        <a 
        
        href="#experience"
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#' ? 'active' : ' ' }
        >
            <BsBookHalf/>
        
        </a>

        <a
        
        href="#services"
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#' ? 'active' : ' ' }
        
        >
            <AiOutlineCustomerService/>
        
        </a>

        <a 
        
        href="#contact"
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#' ? 'active' : ' ' }

        >
            <AiOutlineMessage/>
            
        </a>

    </nav>

)}
export default Nav