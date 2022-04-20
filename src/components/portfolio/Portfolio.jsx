import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id:1,
        image: IMG1,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    },

    {
        id:2,
        image: IMG2,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    },

    {
        id:3,
        image: IMG3,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    },

    {
        id:4,
        image: IMG4,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    },

    {
        id:5,
        image: IMG5,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    },

    {
        id:6,
        image: IMG6,
        tittle:'This is a Portfolio item tittle',
        github: "https://github.com",
        demo:"https://dribbble.com/Alien_pixels"
    }
]

const Portfolio = () => {
    return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>PortFolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id,image,tittle,github,demo})=>{
                    return(
                    
                    <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={tittle} />
                    </div>
                        <h3>{tittle}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className="btn">Github</a>
                        <a href={demo} className="btn btn-primary">live Demo</a>
                        </div>
                </article>)
                })
            }
            
        </div>
    </section>
)}
export default Portfolio