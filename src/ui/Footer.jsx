import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="_container">
                <div className="logo">
                    <h1 className="logo-text">Divine</h1>
                </div>
                <ul className="footer-socials">
                    <li className="footer-socials__item">
                        <a href="#">
                            <img src="/divine/images/icons/socials/instagram.svg"/>
                        </a>
                    </li>
                    <li className="footer-socials__item">
                        <a href="#">
                            <img src="/divine/images/icons/socials/vk.svg"/>
                        </a>
                    </li>
                    <li className="footer-socials__item">
                        <a href="#">
                            <img src="/divine/images/icons/socials/telegram.svg"/>
                        </a>
                    </li>
                </ul>
                <div className="footer-contacts">
                    <div className="footer-contacts__item">divineshop@gmail.com</div>
                    <div className="footer-contacts__item">+7 537 252 59 35</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;