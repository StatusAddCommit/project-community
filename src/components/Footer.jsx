/* eslint-disable */

import React from 'react';
import messages from '../constants/messages';

const { footer, social } = messages;

const Footer = () => (
  <footer className="footer" itemScope itemType="http://schema.org/WPFooter">
    <div className="container">
      <div className="footer-top">
        <a className="back-to-top anchor js-wave" href="#header">
          <i className="material-icons">keyboard_arrow_up</i>
        </a>
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <div className="widget-footer">
              <div className="logo">
                <a href="/about">
                  Umma
                  <span>Charities</span>
                </a>
              </div>
              <div className="site-description" itemProp="about">
                <p>{footer.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex-container">
        <ul className="footer-social clearfix">
          <li>
            <a href={social.fb} className="fa fa-facebook js-wave" />
          </li>
          <li>
            <a href={social.tw} className="fa fa-twitter js-wave" />
          </li>
          <li>
            <a href={social.ig} className="fa fa-instagram js-wave" />
          </li>
        </ul>
        <div className="footer-copyright">
          ©
          <span itemProp="copyrightYear">
            {new Date().getFullYear()}
            {' by '}
          </span>
          <a href="/" itemProp="copyrightHolder">
            Umma Charities
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
