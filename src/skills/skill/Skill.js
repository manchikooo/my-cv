import React from "react";
import style from './Skill.module.css';

function Skill(props) {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi nam odio ratione temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi nam odio ratione temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi nam odio ratione temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi nam odio ratione temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi nam odio ratione temporibus.</span>
        </div>
    );
}

export default Skill;
