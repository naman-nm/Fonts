import React, { useState } from 'react';
import './Header.css';
import img from '../../assest/image_2_1.png';
import img2 from '../../assest/02.png';
import TextAnimation from './animation';


export const Header = () => {
  // State to manage the navigation toggle
  const [isNavOpen, setNavOpen] = useState(false);

   // Function to toggle the navigation
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <header>
      <div className="container text-center">
        <div className="element d-flex justify-content-between">
          <nav className="navbar navbar-expand-lg">
            <div>
              <a className="navbar-brand" href="#home">
                <img src={img} alt="logo" />
              </a>
            </div>
            {/* Toggle Button for Mobile View */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <span className="material-symbols-outlined white">close</span>
              ) : (
                <span className="material-symbols-outlined white">menu</span>
              )}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Navigation links */}
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link nav-item-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-item-link" href="#Portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-item-link" href="#Pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-item-link" href="#FAQ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-item-link" href="#Login">
                    Login
                  </a>
                </li>
              </ul>
              <div>
              <form className="form-inline">
                <button className="header_btn">Get Started</button>
              </form>
            </div>
            </div>
            
          </nav>
        </div>

        <div className="container main-header" >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            
            }}
          >
            {/* Top Heading */}
            <h4 className="top-heading-1">
              Explore a Treasure Trove of{' '}
              <div className="animation">
                <span className="heading-1">Free Trendy Fonts</span>
              </div>
            </h4>

            {/* Sub Heading */}
            <h6 className="top-heading-2">Your Source for Free and Stylish Fonts</h6>
          </div>

          {/* Star Image */}
          <div className='star-image'><img src={img2} alt="star" /></div>

          {/* Text Animation Component */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextAnimation/>
          </div>
        </div>
      </div>
    </header>
  );
};
