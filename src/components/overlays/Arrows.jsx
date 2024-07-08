import React, { useContext } from 'react';

import classes from "../../scss/Arrows.module.scss";
import { PageContext } from "../PageManager"

import backWoodArrow from "../../assets/svg/buttons/Arrows/backWoodArrow.svg"
import nextWoodArrow from "../../assets/svg/buttons/Arrows/nextWoodArrow.svg"
import backPlainArrow from "../../assets/svg/buttons/Arrows/backPlainArrow.svg"
import nextPlainArrow from "../../assets/svg/buttons/Arrows/nextPlainArrow.svg"

const Arrows = (props) => {
    const { curPage } = useContext(PageContext);

    return (
        <div className={classes.Arrows}>
            {props.arrows.back && 
                <img src={props.arrows.type === "plain" ? backPlainArrow : backWoodArrow} 
                alt='arrow' 
                className={`${classes.backArrow} ${classes[props.arrows.type]}`}
                onClick={() => props.setCurPage(curPage - 1) }/>}
            {(curPage !== 0 && (props.visitedPages.includes(curPage) || (props.arrows.front || props.answered))) && 
                <img src={props.arrows.type === "plain" ? nextPlainArrow : nextWoodArrow} 
                    alt='arrow' 
                    className={`${classes.frontArrow} ${classes[props.arrows.type]}`}
                    onClick={() => props.setCurPage(curPage + 1) }
                />}
        </div>
    );
};

export default Arrows;