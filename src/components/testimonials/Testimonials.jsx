import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
    {
        avatar: AVTR1,
        name: 'Michael Holdings',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

    {
        avatar: AVTR2,
        name: 'Jasmine Jordan',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

    {
        avatar: AVTR3,
        name: 'Mathew Jade',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

    {
        avatar: AVTR4,
        name: 'Alex Smith',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },
]

const Testimonials = () => {
return (
    <section id='testimonials'>
        <h5>Reviews From Clients</h5>
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
            {
                data.map (({avatar,name,review},index) =>
                {
                    return(
                    <article key={index} className="testimonials">
                    <div className="client__avatar">
                        <img src={avatar} alt="Avatar one" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}
                        </small>
                </article>)
                }
                )
            }

        </div>
    </section>
)
}
export default Testimonials