import React from "react";
import style from './Work.module.css';

function Work() {
    return (
        <div className={style.workBlockWrapper}>
            <div className={style.workBlock}>
                <div className={style.clickToWatch}>Смотреть</div>
            </div>
            <div className={style.infoAboutProjectBlock}>
                <h3>Название проекта</h3>
                <p>Краткое описание
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed.</p>
            </div>
        </div>
    );
}

export default Work;
