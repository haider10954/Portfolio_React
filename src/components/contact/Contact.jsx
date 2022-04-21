import React from "react"
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from "react"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bhrvgct', 'template_m05debn', form.current, 'E42ogFVl81DvJYVDu')
        e.target.reset();
    };
return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <HiOutlineMail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>chhaider10954@gmail.com</h5>
                    <a href="mailto:chhaider10954@gmail.com">Send A Message</a>
                </article>

                <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon"/>
                    <h4>Messenger</h4>
                    <h5>Haider Zaman</h5>
                    <a href="http://m.me//hiader.zaman.90">Send A Message</a>
                </article>

                <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon"/>
                    <h4>WhatsApp</h4>
                    <h5>+923007770225</h5>
                    <a href="https://api.whatsapp.com/send?phone='+923007770225'">Send A Message</a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>
)
}
export default Contact