import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';
import { footer } from '../../portfolio'

const Footer = () => {
  const {email,social} = footer

  return (
  <footer className='footer'>
      <div className="footer-icons">
      <>
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub />
              </a>
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedin />
              </a>
          </>
<a href={`mailto:${email}`}>
  <FaEnvelope />
</a>

      </div>
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Jairo Osorio Ramirez</p>
      </div>
  </footer>
)
}

export default Footer
