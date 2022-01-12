import React from "react";
import style from './Navigation.module.css';

function Navigation() {
    return (
        <div className={style.navigation}>
            <a href="https://vk.com">Главная</a>
            <a href="https://vk.com">Скиллы</a>
            <a href="https://vk.com">Проекты</a>
            <a href="https://vk.com">Контакты</a>
        </div>
    );
}

export default Navigation;
