import React, {useState} from 'react';

import custom from "../custom/Custom.module.css";
import classes from "./BasketPage.module.css";

const BasketPage = ({basket}) => {
    const [delivery, setDelivery] = useState(350);
    let cost = 0;
    return (
        <main className={"_container " + custom.custom}>
            <section className={classes.order}>
                <h2 className={"title " + custom.customTitle}>Ваш заказ:</h2>
                <div className={classes.orderContainer}>
                    <div id={classes.orderBox} className={classes.orderBox}>
                        {
                            Object.entries(basket).map(([id, product]) => {
                                cost += product.cost;
                                return (
                                    <div className="nav-basket__item">
                                        <img src={"/divine/images/products/" + product.image} className="nav-basket__image" alt="Product"/>

                                        <div className="nav-basket__content">
                                            <div className="nav-basket__header">
                                                <div className="nav-basket__name">{product.name}</div>
                                                <p className="nav-basket__size">Размер: <span>{product.size}</span></p>
                                            </div>
                                            <div className="nav-basket__count">
                                                <div className="text">Количество:</div>
                                                <div className="nav-basket__count-info">{product.amount}</div>
                                            </div>
                                            <div className="nav-basket__price">{product.cost}p</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            <form className={classes.form}>
                <h4 className={"title title-small " + custom.customTitle}>Доставка</h4>

                <div className={classes.formBox}>
                    <div className={classes.column}>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="fio">ФИО</label>
                            <input className={classes.input} id="fio" type="text"/>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="email">Email</label>
                            <input className={classes.input} id="email" type="email"/>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="phone">Телефон</label>
                            <input className={classes.input} id="phone" type="tel"/>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="index">Индекс</label>
                            <input className={classes.input} id="index" type="text"/>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="promocode">Промокод</label>
                            <input className={classes.input} id="promocode" type="text"/>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="city">Город</label>
                            <input className={classes.input} id="city" type="text"/>
                        </div>
                        <div className={[classes.field, classes.field2, classes.radio].join(" ")}>
                            <div className={classes.radioField}>
                                <input onClick={() => setDelivery(350)} className={classes.inputRadio} id="delivery-cdek" type="radio" name="typedelivery" value="CDEK" checked/>
                                <label className={classes.radioLabel} htmlFor="delivery-cdek">
                                    <div className={classes.radio}></div>
                                    СДЭК <span>от 3 дней</span>
                                </label>
                            </div>
                            <div className={classes.radioField}>
                                <input onClick={() => setDelivery(500)} className={classes.inputRadio} id="delivery-russia" type="radio" name="typedelivery" value="RUSSIA"/>
                                <label className={classes.radioLabel} htmlFor="delivery-russia">
                                    <div className={classes.radio}></div>
                                    Почта России<span>от 7 дней</span>
                                </label>
                            </div>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="address">Телефон</label>
                            <input className={classes.input} id="address" type="text"/>
                        </div>
                        <div className={classes.field}>
                            <label className={classes.inputLabel} htmlFor="comment">Комментарий</label>
                            <input className={classes.input} id="comment" type="text"/>
                        </div>
                        <div className={classes.formText}>
                            <p>Сумма: <span>{cost} рублей</span></p>
                            <p>Сумма доставки: <span>{delivery} рублей</span></p>
                            <p>Итоговая сумма: <span>{cost + delivery} рублей</span></p>
                        </div>
                    </div>
                </div>

                <button className={classes.formButton}>Оформить</button>
            </form>
        </main>
    );
};

export default BasketPage;