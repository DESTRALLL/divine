import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="_container">
                <div className="logo">
                    <h1 className="logo-text">Divine</h1>
                </div>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link to="/" className="nav-list__link">Главная</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/catalog" className="nav-list__link">Каталог</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/delivery" className="nav-list__link">Доставка</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/contact" className="nav-list__link">Контакты</Link>
                    </li>
                </ul>
                <Link to="/basket" className="nav-basket">
                    <button className="nav-basket__button">
                        <img src="/divine/images/icons/basket.svg" alt="Basket"/>
                    </button>
                    <div className="nav-basket__box">
                        <div id="basket-box">

                        </div>
                        <a href="/basket" className="button button-width nav-basket__pay">Перейти к покупке</a>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;