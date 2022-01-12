import React from "react";
import style from './Works.module.css';
import Work from "./work/Work";
import containerStyle from '../common/styles/Container.module.css';

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${containerStyle.container} ${style.worksContainer}`}>
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
