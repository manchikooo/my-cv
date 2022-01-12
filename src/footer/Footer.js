import React from "react";
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <h3>Ижеля Владислав</h3>
            <div className={style.connectionWithMeBlock}>
                <div>ВК</div>
                <div>Инст</div>
                <div>Тг</div>
                <div>Гит</div>
                <div>почта</div>
            </div>
            <div>
                <span>2022 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
