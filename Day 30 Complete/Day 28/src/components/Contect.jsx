import React from 'react'
import "../Style/Contact.css"
import { MdEmail } from 'react-icons/md'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Contect = () => {
    return (
        <>
            <div className="contact">
                <div className="secta_1">
                    <h1 className='con'>Contact <span className="ji">Me</span></h1>
                    <p className='conka'>
                        Let's Work Together. Feel free to reach out if you have any questions, opportunities, or just want to connect.</p>
                    <span className='emial'>
                        <span className='mail'><MdEmail /></span>
                        Youloos477@gmail.com
                    </span>
                    <div className="icons">
                        <BsGithub />
                        <BsFacebook />
                        <BsTwitter />
                        <BsInstagram />
                        <BsLinkedin />
                    </div>
                </div>
                <div className="secta_2">
                    <div className="form-container">
                        <input className="input-field" type="text" placeholder="Your Name" />
                        <input className="input-field" type="email" placeholder="Your Email" />
                        <input className="input-field" type="text" placeholder="Your Subject" />
                        <textarea className="textarea-field" placeholder="Your Message"></textarea>
                        <button className="submit-btn">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contect
