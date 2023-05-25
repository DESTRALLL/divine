import React, {useState} from 'react';

import classes from "./Product.module.css";

const Product = ({product, add, open}) => {
    const [size, setSize] = useState("");

    function selectSize(event, s) {
        for(let item of event.target.parentElement.querySelectorAll("." + classes.cartSizeItem)) {
            item.classList.remove(classes.cartSizeItemActive);
        }
        event.target.classList.add(classes.cartSizeItemActive);
        setSize(s);
    }

    function buy(event) {
        if(size === "") return;

        add(product, size);
        window.scrollTo({top: 0, behavior: 'smooth'});
        open(true);
    }

    return (
        <div className={classes.cart}>
            <div className={classes.cartImage}>
                <img alt="Product" src={"/divine/images/products/" + product.image}/>
            </div>

            <div className={classes.cartContent}>
                <div className={classes.cartName}>
                    {product.name}
                </div>
                <div className={classes.cartSize}>
                    <div className={classes.cartSizeTitle}>
                        Размер
                    </div>
                    <div className={classes.cartSizeBox}>
                        <div className={classes.cartSizeItem} onClick={(event) => selectSize(event, "S")}>S</div>
                        <div className={classes.cartSizeItem} onClick={(event) => selectSize(event, "M")}>M</div>
                        <div className={classes.cartSizeItem} onClick={(event) => selectSize(event, "L")}>L</div>
                        <div className={classes.cartSizeItem} onClick={(event) => selectSize(event, "XL")}>XL</div>
                    </div>
                </div>
                <div className={classes.cartPrice}><span>{product.price}</span>р</div>
            </div>

            <button className={"button button width " + classes.catalogButton + " " + (size !== "" ? classes.catalogButtonActive : "")} onClick={buy}>Купить {size}</button>
        </div>
    );
};

export default Product;