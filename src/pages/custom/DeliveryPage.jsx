import React from 'react';

import classes from "./Custom.module.css";

const DeliveryPage = () => {
    return (
        <main className={"_container " + classes.custom}>
            <h2 className={"title " + classes.customTitle}>Доставка</h2>

            <div className={classes.customBox}>
                <div className={[classes.text, classes.textSmall].join(" ")}>
                    Курьерская доставка по Москве - осуществляется транспортной компанией СДЭК, стоимость рассчитывается
                    при оформлении.
                </div>
                <div className={[classes.text, classes.textSmall, classes.mbMedium].join(" ")}>
                    (Курьер свяжется с вами по телефону для обсуждения деталей.)
                </div>

                <div className={[classes.text, classes.mbMedium].join(" ")}>
                    Доставка компанией CДЭК (Быстро и Надежно) - рассчитывается при оформлении
                </div>

                <div className={[classes.text, classes.textSmall].join(" ")}>
                    Доставка Почтой РФ - 500р
                </div>

                <div className={[classes.text, classes.textSmall].join(" ")}>
                    Доставка СДЭК - 350р
                </div>
            </div>
        </main>
    );
};

export default DeliveryPage;