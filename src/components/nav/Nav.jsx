import React from "react";
import './nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BsBookHalf} from "react-icons/bs";
import {AiOutlineCustomerService} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";

const Nav = () => {
return (
    <nav>
        <a href="#home" className="active"><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BsBookHalf/></a>
        <a href="#services"><AiOutlineCustomerService/></a>
        <a href="#contact"><AiOutlineMessage/></a>

    </nav>

)}
export default Nav