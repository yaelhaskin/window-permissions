import React, { useState, useContext, useEffect } from 'react';

import classes from "../../scss/TextNav.module.scss";
import data from "../../pages.json"
import { PageContext } from "../PageManager"

import littleArrow from "../../assets/svg/buttons/Arrows/littleArrow.svg"

const TextNav = (props) => {
    const { curPage } = useContext(PageContext);

    let title = data.pages[curPage].titleSwitch;
    let infoArray = data.pages[curPage].text;
    const [infoNum, setInfoNum] = useState(0);

    useEffect(() => {
        setInfoNum(0);
    }, [curPage])

    const hideRight = {
        visibility: infoNum < 1 ? "hidden" : "visible"
    }
    
    const hideLeft = {
        visibility: infoNum === infoArray.length - 1 ? "hidden" : "visible"
    }

    return (
        <div className={classes.TextNav}>
            { title && <p className={classes.title}> {title[infoNum]} </p>}
            <p style={{ position: "relative" }}>{infoArray[infoNum]}</p>
            {infoArray.length > 1 && <div className={classes.dotsContainer}>
                <div className={`${classes.arrowArea} ${classes.arrowAreaRight}`} onClick={() => setInfoNum(prev => prev - 1)} style={hideRight}>
                    <img src={littleArrow} alt="arrow" className={classes.littleArrow} />
                </div>
                <div className={classes.dots}>
                    {infoArray.map((item, index) => {
                        return <div className={[`${classes.dot} ${index === infoNum && classes.fullOpacity}`]} key={index} onClick={() => setInfoNum(index)}></div>
                    })}
                </div>
                <div className={`${classes.arrowArea} ${classes.arrowAreaLeft}`} onClick={() => setInfoNum(prev => prev + 1)} style={hideLeft}>
                    <img src={littleArrow} alt="arrow" className={classes.littleArrow} />
                </div>
            </div>}
        </div>
    );
};

export default TextNav;