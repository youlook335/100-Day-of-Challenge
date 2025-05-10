import React from 'react'
import "../Style/Footer.css"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <hr />
      <footer>

        <div className="sce_1">
          <ul className='ulul'>
            <li className='footer_nav'>Home</li>
            <li className='footer_nav'>About</li>
            <li className='footer_nav'>Experinece</li>
            <li className='footer_nav'>Skills</li>
            <li className='footer_nav'>Contact</li>
          </ul>
        </div>
        <div className="sce">
          <input className='nmn' type="text" placeholder='Subscribe' />
          <div className="icons">
            <BsGithub />
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </footer>
      <div className="copyright">
        <hr />
        <h4 className='hj'>Copy right Tanveer@.com</h4>
      </div>
    </>
  )
}

export default Footer
