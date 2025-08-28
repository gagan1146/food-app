import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Discover, order, and enjoy your favorite meals with ease. Our food web app connects you to local restaurants, offers personalized recommendations, and provides fast, secure ordering—all in one seamless experience.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Home
                        </Link></li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>
                            <a href="tel:+917409487201">+91-7409487201</a>
                        </li>
                        <li>
                            <a href="mailto:gagansharma9969@gmail.com">gagansharma9969@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer