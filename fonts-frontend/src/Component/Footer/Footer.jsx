import React from 'react';
import './Footer.css';
import img from "../../assest/footer_page_logo_2.png";
import img1 from "../../assest/footer_page_logo_1.png";

// Style for navigation links
const linkStyle = {
  textDecoration: 'none', 
  color: 'white', 
};

export const Footer = () => {
  console.log('footer check'); // Log statement for debugging, can be removed in production
  return (
    <footer className='U' style={{ backgroundColor: "#19028c", paddingTop: "50px" }}>
      <div className="section-2">
        <div className="container" style={{ color: "white" }}>
          <div className="row">
            {/* Footer Logo and Description */}
            <div className="col-md-4">
              <img src={img} alt="footer logo" />
              <p className="footer-page-section-p" style={{ marginTop: "20px" }}>
                Unlimited Graphic Design & Landing Page UI, Human Illustrations & Design Service on Subscription.
              </p>
              <img src={img1} alt="footer logo" />
            </div>

            {/* Navigation Links */}
            <div className="col-md-2">
              <h1 className="footer-page-section-h1"><a href="#home" style={linkStyle}>Home</a></h1>
              <h1 className="footer-page-section-h1"><a href="#how-it-works" style={linkStyle}>How It Works</a></h1>
              <h1 className="footer-page-section-h1"><a href="#portfolio" style={linkStyle}>Portfolio</a></h1>
              <h1 className="footer-page-section-h1"><a href="#pricing" style={linkStyle}>Pricing</a></h1>
              <h1 className="footer-page-section-h1"><a href="#faq" style={linkStyle}>FAQ</a></h1>
              <h1 className="footer-page-section-h1"><a href="#blog" style={linkStyle}>Blog</a></h1>
              <h1 className="footer-page-section-h1"><a href="#contact" style={linkStyle}>Contact</a></h1>
            </div>

            {/* Service Categories */}
            <div className="col-md-3">
              <h1 className="footer-page-section-h1"><a href="#unlimited-graphic-design" style={linkStyle}>Unlimited Graphic Design</a></h1>
              <h1 className="footer-page-section-h1"><a href="#unlimited-landing-page" style={linkStyle}>Unlimited Landing Page</a></h1>
              <h1 className="footer-page-section-h1"><a href="#unlimited-wordpress-html" style={linkStyle}>Unlimited Wordpress & HTML</a></h1>
              <h1 className="footer-page-section-h1"><a href="#unlimited-branding-logo" style={linkStyle}>Unlimited Branding & Logo</a></h1>
              <h1 className="footer-page-section-h1"><a href="#unlimited-human-illustrations" style={linkStyle}>Unlimited Human Illustrations</a></h1>
            </div>

            {/* Additional Links */}
            <div className="col-md-3">
              <h1 className="footer-page-section-h1"><a href="#list-of-services" style={linkStyle}>List of Services</a></h1>
              <h1 className="footer-page-section-h1"><a href="#integrations" style={linkStyle}>Integrations</a></h1>
              <h1 className="footer-page-section-h1"><a href="#unlimited-design-alternatives" style={linkStyle}>Unlimited Design Alternatives</a></h1>
              <h1 className="footer-page-section-h1"><a href="#affiliate-program" style={linkStyle}>Affiliate Program</a></h1>
            </div>
          </div>
        </div>
        <div className="row st">
          <div className="col-md-12 text-center">
            <h1 className="footer-page-section-h1">Copyright 2022 Draftss. All Rights Reserved.</h1>
            <span className="d-flex justify-content-center">
              <h1 className="footer-page-section-h1">Terms and Conditions</h1>
              <h1 className="footer-page-section-h1" style={{ marginLeft: "35px" }}>Privacy Policy</h1>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
