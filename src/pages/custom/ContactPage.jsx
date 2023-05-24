import React from 'react';

import classes from "./Custom.module.css";

const ContactPage = () => {
    return (
        <main className={"_container " + classes.custom}>
            <h2 className={"title " + classes.customTitle}>Доставка</h2>

            <div className={classes.customBox}>
                <div className={[classes.text, classes.mbSmall].join(" ")}>
                    Служба поддержки:
                    </div>
                    <div className={[classes.text, classes.mbMedium].join(" ")}>
                    support@tommysinny.com
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    ИП: Стручин Кирилл Александрович
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    ИНН: 774412286100
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    ОГРНИП: 65421 44812 76178
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    БИК: 074 575 993
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    Расчётный счёт: 4080 2810 0015 0030 8498
                    </div>

                    <div className={[classes.text, classes.mbSmall].join(" ")}>
                    Корр. счёт: 3010 1810 8452 5000 0999
                    </div>
                    </div>
                    </main>
    );
};

export default ContactPage;