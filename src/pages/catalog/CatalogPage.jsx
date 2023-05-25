import React from 'react';

import classes from "./CatalogPage.module.css";
import Product from "../../components/product/Product";

const CatalogPage = ({products, add, open}) => {
    return (
        <section className={"_container " + classes.catalog}>
            <h2 className={"title " + classes.catalogTitle}>Каталог</h2>

            <div className={classes.catalogBox}>
                {
                    products.map(product => {
                        return (
                            <Product product={product} add={add} open={open}/>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default CatalogPage;