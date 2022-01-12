import React from "react";
import style from './Main.module.css';
import containerStyle from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greetingText}>
                    <span>Hi there</span>
                    <h1>I am Vlad Izh</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    );
}

export default Main;
