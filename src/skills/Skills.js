import React from "react";
import style from './Skills.module.css';
import containerStyle from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title='React' icon='тут будет иконка'/>
                    <Skill title='JavaScript' icon='тут будет иконка'/>
                    <Skill title='CSS' icon='тут будет иконка'/>
                    <Skill title='HTML' icon='тут будет иконка'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
