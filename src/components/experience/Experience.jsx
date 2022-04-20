import React from "react";
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
return (
    <section id='experience'>
        <h5>
            What Skills I Have
        </h5>
        <h2>
            My Experience
        </h2>

        <div className="container experience__container">

            <div className="experience_frontend">

                <h3>Front End Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>CSS</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Javascript</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>BootStrap</h4>
                        <small className="text-light">Experienced</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Angular</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>React</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                </div>
            </div>

            <div className="experience_Backend">

            <h3>Back End Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Node js</h4>
                        <small className="text-light">Experienced</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Mongo DB</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>PHP</h4>
                        <small className="text-light">Intermediate</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>MySQL</h4>
                        <small className="text-light">Experienced</small>
                    </article>

                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Python</h4>
                        <small className="text-light">Intermediate</small>
                    </article>


                </div>


            </div>

        </div>
    </section>
)
}
export default Experience