import React, { useState, useEffect } from 'react';

import data from "../../pages.json"
import content from "../../content.json"
import classes from "../../scss/Practice.module.scss";

import menuCloud from "../../assets/svg/buttons/Menu/menuCloud.svg"
import redBanner from "../../assets/svg/stand/banner/redBanner.svg"
import greenBanner from "../../assets/svg/stand/banner/greenBanner.svg"
import blueBanner from "../../assets/svg/stand/banner/blueBanner.svg"
import cloudNTFS from "../../assets/svg/stand/cloud/cloudNTFS.svg"
import cloudSHARE from "../../assets/svg/stand/cloud/cloudSHARE.svg"
import cloudCLASH from "../../assets/svg/stand/cloud/cloudCLASH.svg"

import DragNDrop from '../Practice/DragNDrop/DragNDrop';
import MultiChoise from '../Practice/MultiChoise';
import RightClick from '../Practice/RightClick';
// import RightClick from '../Practice/RightClickCopy';

const Practice = (props) => {
    const page = data.pages[props.curPage];
    let standType = page.standType;

    const standColorObj = {
        NTFS: redBanner,
        SHARE: greenBanner,
        CLASH: blueBanner
    }
    const cloudObj = {
        NTFS: cloudNTFS,
        SHARE: cloudSHARE,
        CLASH: cloudCLASH
    }

    useEffect(() => {
        switch (props.curPage) {
            case (24):
                props.setVisitedMap((prev) => ({
                    ...prev,
                    NTFS: true,
                }))
                break;
            case (33):
                props.setVisitedMap((prev) => ({
                    ...prev,
                    SHARE: true,
                }))
                break;
            case (42):
                props.setVisitedMap((prev) => ({
                    ...prev,
                    CLASH: true
                }))
                break;
        } 
    }, [props.curPage])

    return (
        <div className={classes.Practice}>
            <img src={standColorObj[standType]} alt='redBanner' className={classes.banner}/>
            <img src={menuCloud} alt="menuCloud" className={classes.menuCloud} onClick={() => props.setShowMenu(true)}/>
            <img src={cloudObj[standType]} alt='titleCloud' className={classes.titleCloud}/>

            <div className={classes.question} style={page.rightClick ? {height: "110vh"} : null}>
                <p className={page.rightClick === undefined ? classes.textRegular : classes.textRightClick} > {props.text} </p>

                {page.dnd && <DragNDrop 
                    curPage={props.curPage} 
                    answered={props.answered} 
                    setAnswered={props.setAnswered} 
                    question={content.dnd}
                    type={page.dnd}
                />}

                {page.select && <MultiChoise 
                    curPage={props.curPage} 
                    standType={standType}
                    setAnswered={props.setAnswered} 
                    question={page.select} 
                />}

                {page.rightClick && <RightClick
                    setAnswered={props.setAnswered} 
                    question={content.examples[page.rightClick]} 
                />}
            </div>
        </div>
    );
};

export default Practice;