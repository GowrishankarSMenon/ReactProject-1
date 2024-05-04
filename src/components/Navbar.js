import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import as ScrollLink
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const buttonStyle = {
    backgroundColor: '#ff8c66',
    color: 'white',
  };

  const navbarLinkStyle = {
    color: 'white',
    display: 'flex',
    alignItems: 'center', // Align text and any potential icons vertically
    height: '100%',
    textDecoration: 'none', // Remove underline from links
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#990000' }}>
        <div className="container-fluid">
          <RouterLink to="/" className="navbar-brand">
            <img src="/logoNew.png" alt="KVPT Logo" style={{ width: '100px', height: '50px' }} />
          </RouterLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <RouterLink to="/" className="nav-link" style={navbarLinkStyle}>
                  Home
                </RouterLink>
              </li>
              <li className="nav-item mx-3">
                <ScrollLink
                  to="content2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  style={{ ...navbarLinkStyle, paddingTop: '3px' }}
                >
                  About Us
                </ScrollLink>
              </li>
              <li className="nav-item mx-3">
                <ScrollLink
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  style={{ ...navbarLinkStyle, paddingTop: '3px' }}
                >
                  Contact Us
                </ScrollLink>
              </li>
              <li className="nav-item mx-3">
                <RouterLink to="/" className="nav-link" style={navbarLinkStyle}>
                  Gallery
                </RouterLink>
              </li>
              {/* Add other navbar links as needed */}
            </ul>
            <button className="btn btn-light rounded-pill mx-2" style={buttonStyle}>
              Sign Up
            </button>
            <button className="btn btn-light rounded-pill mx-2" style={buttonStyle}>
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
