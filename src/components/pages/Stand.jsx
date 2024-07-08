import React from 'react';

import data from "../../pages.json"

import classes from "../../scss/Stand.module.scss";
import TextNav from '../overlays/TextNav';

import standBottom from "../../assets/svg/stand/parts/standBottom.svg"
import redStand from "../../assets/svg/stand/parts/redStand.svg"
import greenStand from "../../assets/svg/stand/parts/greenStand.svg"

import pole from "../../assets/svg/stand/parts/pole.svg"

import menuStand from "../../assets/svg/buttons/Menu/menuBook.svg"
import exampleBtn from "../../assets/svg/buttons/exampleBtn.svg"
import arrow from "../../assets/svg/buttons/Arrows/v-arrow.svg"

const Stand = (props) => {
    const stand = data.pages[props.curPage];
    let standType = stand.standType;

    const standColorObj = {
        NTFS: redStand,
        SHARE: greenStand,
    }

    return (
        <div className={classes.Stand}>
           {!props.showPopUp && <>
                <div className={classes.standTop}>
                    { !props.showPopUp && <>
                        <img src={standColorObj[standType]} alt='standTop' />
                        <div className={classes.signContainer}>
                            <img src={pole} alt='pole' className={classes.pole}/>
                            <div className={classes.standSign}> { props.type } </div>
                        </div>
                    </>}
                </div>

                <div className={classes.textContainerStand}>
                    {props.title && <p className={classes.title}> {props.title} </p>}
                    <TextNav className={classes.TextNav}/>
                </div>

                {stand.rightClick && <div className={classes.exampleBtn} style={props.title === "Effective Permissions" ? {top: "65%", left: "52%"} : {}} onClick={() => props.setShowExample(true)}>
                    <img src={arrow} alt='v-right' />
                    <img src={exampleBtn} alt='exampleBtn' className={classes.exampleBtnText}/>
                    <img src={arrow} alt='v-left' className={classes.arrowLeft} />
                </div>}

                <img src={menuStand} alt='menu' className={classes.menuStand} onClick={() => props.setShowMenu(true)}/>
           </>}
           
            <img src={standBottom} alt='standBottom' className={classes.standBottom} style={props.showPopUp ? {height: '107%'} : {width: '100%'}}/>
            {props.popUp && <div className={`${classes.littleArrow} ${props.showPopUp ? classes.littleArrowTop : classes.littleArrowBottom}`} onClick={() => props.setShowPopUp((prev) => !prev)}></div>}
        </div>
    );
};

export default Stand;