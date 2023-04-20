/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import "../styles/navbar.scss";
import "../styles.scss"

class Footer extends React.Component {
  render() {
    return (
        <div className="footer-container">
            <div className="footer">
                <a href="/" className="brand-name">
                <img src={require('../assets/images/logo.png')} className="logo"/>
                </a>
                <h4 className="logo-title"><span className="footer-logo-text">LOSANGELES</span><br className="footer-break"/><span className="footer-logo-text-1">MOUNTAINS</span></h4>
                <div className="footer-text">
                    <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
