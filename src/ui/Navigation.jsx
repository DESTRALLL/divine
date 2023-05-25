import React from 'react';
import {Link} from "react-router-dom";

const Navigation = ({control, basket, add, remove, deleteItem}) => {
    let cost = 0;
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
                <div className={"nav-basket " + (control["open"] === true ? "active" : "")}>
                    <button className="nav-basket__button" onClick={() => control.setOpen(!control.open)}>
                        <img src="/divine/images/icons/basket.svg" alt="Basket"/>
                    </button>
                    <div className="nav-basket__box">
                        <div id="basket-box">
                            {
                                Object.entries(basket).map(([id, product]) => {
                                    cost += product.cost;
                                    return (
                                        <div className="nav-basket__item">
                                            <img src={"/divine/images/products/" + product.image} className="nav-basket__image" alt={product.name}/>

                                                <div className="nav-basket__content">
                                                    <div className="nav-basket__header">
                                                        <div className="nav-basket__name">{product.name}</div>
                                                        <p className="nav-basket__size">Размер: <span>{product.size}</span>
                                                        </p>
                                                    </div>
                                                    <div className="nav-basket__count">
                                                        <div className="nav-basket__count-control" onClick={() => remove(product, product.size)}>-</div>
                                                        <div className="nav-basket__count-info">{product.amount}</div>
                                                        <div className="nav-basket__count-control" onClick={() => add(product, product.size)}>+</div>
                                                    </div>
                                                    <div className="nav-basket__price">{product.cost}p</div>
                                                </div>

                                                <div className="nav-basket__close" onClick={() => deleteItem(product, product.size)}>
                                                    x
                                                </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <Link to="/basket" className="button button-width nav-basket__pay">Перейти к покупке - {cost} рублей</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;