import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
