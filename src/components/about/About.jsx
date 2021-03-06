import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                    <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>2 Year Working</small>
                        
                    </article>

                    <article className="about__card">
                    <FiUsers className="about__icon"/>
                        <h5>Clients</h5>
                        <small>100+ World Wide</small>
                        
                    </article>

                    <article className="about__card">
                    <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>50+ Projects Completed</small>
                        
                    </article>
                </div>
                <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quibusdam doloremque facilis pariatur quaerat nemo, tempora soluta laudantium id maiores vero provident adipisci explicabo ipsa maxime fuga doloribus dicta harum! 
                    </p>

                    <a href="#contact" className="btn btn-primary">Lets Talk</a>
            </div>

        </div>
    </section>
)
}
export default About