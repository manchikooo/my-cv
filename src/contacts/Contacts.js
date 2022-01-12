import React from "react";
import style from './Contacts.module.css';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <h2>Контакты</h2>
            <form className={style.inputFields}>
                <input placeholder='Ваше имя' type="text"/>
                <input placeholder='Ваш email' type="text"/>
                <textarea className={style.textarea} placeholder='Ваше сообщение'/>
            </form>
            <div className={style.buttonSendBlock}>
                <div className={style.buttonSend}>Отправить</div>
            </div>
        </div>
    );
}

export default Contacts;
