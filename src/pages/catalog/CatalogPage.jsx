import React from 'react';

import classes from "./CatalogPage.module.css";

const CatalogPage = () => {
    return (
        <section className={"_container " + classes.catalog}>
            <h2 className={"title " + classes.catalogTitle}>Каталог</h2>

            <div className={classes.catalogBox}>
                <div data-cart="1" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/1.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "GANG OR BANG" CRYSTAL
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>2590</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="2" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/2.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "PUFFY BEAR" BLACK T-SHIRT
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>2190</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="3" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/3.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "PUFFY BEAR" WHITE T-SHIRT
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>2190</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="4" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/4.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            REFLECTION STAR T-SHIRT
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>2200</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="5" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/5.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            Hoodie ''BLACK CUTS''
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4890</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="6" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/6.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BLESSED MONOGRAM JACKET
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>7990</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="7" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/7.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "IN LOVE" Zip-Hoodie
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>5490</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="8" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/8.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "SILK HOES" GRAY ZIP-HOODIE
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4890</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="9" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/9.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BUTTONS BUNNY ZIP B&W
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>7200</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="10" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/10.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BUTTONS BUNNY ZIP PAINTED
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>7200</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="11" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/11.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BUNNY ZIP HOODIE WHITE
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>7200</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="12" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/12.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BUTTONS BUNNY ZIP PLATINA
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>5590</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="13" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/13.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BLESSED SWEATER "MONOGRAM"
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4290</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="14" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/14.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "DOTTED BEAR" BLACK SWEATER
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4990</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="15" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/15.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "CLOUDS BOYS" SWEATER (GOLD)
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4190</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="16" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/16.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "MERCY" CARGO PANTS
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>4890</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="17" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/17.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            "GHOST CROSS" PANTS
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>3990</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
                <div data-cart="18" className={classes.cart}>
                    <div className={classes.cartImage}>
                        <img alt="Product" src="/divine/images/products/18.jpg"/>
                    </div>

                    <div className={classes.cartContent}>
                        <div data-name className={classes.cartName}>
                            BLESSED PANTS «HEART» GREY
                        </div>
                        <div className={classes.cartSize}>
                            <div className={classes.cartSizeTitle}>
                                Размер
                            </div>
                            <div className={classes.cartSizeBox}>
                                <div data-size="S" className={classes.carSizeItem}>S</div>
                                <div data-size="M" className={classes.carSizeItem}>M</div>
                                <div data-size="L" className={classes.carSizeItem}>L</div>
                                <div data-size="XL" className={classes.carSizeItem}>XL</div>
                            </div>
                        </div>
                        <div className={classes.cartSizePrice}><span data-price>3990</span>р</div>
                    </div>

                    <button data-button className={"button button width " + classes.catalogButton}>Купить</button>
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;