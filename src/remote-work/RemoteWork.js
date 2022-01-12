import React from "react";
import style from './RemoteWork.module.css';

function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={style.remoteWorkContainer}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <div className={style.huntMe}>Нанять меня</div>
            </div>
        </div>
    );
}

export default RemoteWork;
