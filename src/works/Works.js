import React from "react";
import style from './Works.module.css';
import Work from "./work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.worksTitle}>My works</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
}

export default Works;
