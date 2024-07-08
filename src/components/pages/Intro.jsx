import React, {useEffect} from 'react';

import TextNav from '../overlays/TextNav';

import classes from "../../scss/Intro.module.scss";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import menuCloud from "../../assets/svg/buttons/Menu/menuCloud.svg"
import cloudFileSystem from "../../assets/svg/stand/cloud/cloudFileSystem.svg"
import cloudCompare from "../../assets/svg/stand/cloud/cloudCompare.svg"
import compareGraph from "../../assets/svg/stand/compareGraph.svg"
import clashFlowChart from "../../assets/svg/stand/clashFlowChart.svg"

const Intro = (props) => {
    const clouds = {
        "file system": cloudFileSystem,
        "השוואת הרשאות": cloudCompare
    }

    const img = {
        compareGraph: compareGraph,
        clashFlowChart: clashFlowChart
    }

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin); 
        gsap.to("#cart", {
            duration: 10,
            repeat: Infinity,
            immediateRender: true,
            transformOrigin: "center center",
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
        });
    },[])    

    useEffect(() => {
        if (props.title !== "") {
            props.setVisitedMap((prev) => ({
                ...prev,
                intro: true
            }))
        }
    }, [props.title])

    return (
        <div className={classes.Intro}>
            <img src={menuCloud} alt="menuCloud" className={classes.menuCloud} onClick={() => props.setShowMenu(true)}/>
            <img src={clouds[props.title]} className={[`${classes.cloud} ${props.title === "השוואת הרשאות" ? classes.clash : classes.file }`]} /> 
            {props.title.includes("התנגשות הרשאות") && <p className={classes.title}> {props.title} </p>}

            {!(props.title === "השוואת הרשאות" || props.title.includes("התנגשות הרשאות")) && <>
                <svg id="cartPath" className={classes.cartPath}>
                    <path id="path" d="m1951.77,260.5c-6.49-5.67-230.26-190.96-236.87-196.15-7.2-5.65-14.48-11-21.8-16.01-8.09-5.54-16.24-10.66-24.43-15.34-5.66-3.23-11.33-6.24-17.02-9.02-13.76-6.73-27.6-12.12-41.46-15.98-11.41-3.18-22.83-5.33-34.2-6.34l-7.25-.49c-4.35-.2-8.69-.23-13.02-.08-3.15.11-6.28.3-9.37.57-6.46.55-12.81,1.45-19.06,2.68-14.33,2.8-28.14,7.3-41.45,13.28-9.73,4.36-19.21,9.52-28.45,15.39-4.39,2.77-8.72,5.71-13,8.8-9.47,6.82-18.69,14.37-27.69,22.55-4.65,4.22-9.23,8.61-13.77,13.15-5.81,5.82-11.53,11.89-17.16,18.19-8.27,9.23-16.36,18.95-24.29,29.05-.6.76-1.2,1.53-1.8,2.3-7.86,10.1-15.58,20.58-23.16,31.34-5.56,7.89-11.06,15.95-16.49,24.12-1.59,2.4-3.18,4.81-4.76,7.22-6.75,10.3-13.41,20.78-20,31.35-5.61,9-11.17,18.08-16.69,27.19-.84,1.38-1.67,2.77-2.51,4.15-6.3,10.43-12.55,20.91-18.76,31.34-6.25,10.5-12.47,20.97-18.66,31.34-.51.85-1.02,1.7-1.52,2.55-5.8,9.7-11.59,19.32-17.38,28.8-6.51,10.66-13.01,21.13-19.54,31.34-1.51,2.37-3.03,4.72-4.54,7.06-5.37,8.3-10.76,16.41-16.17,24.29-7.5,10.93-15.05,21.41-22.68,31.34-.87,1.13-1.74,2.25-2.61,3.37-7.76,9.95-15.6,19.31-23.55,27.97-5.9,6.42-11.86,12.47-17.9,18.06-5.12,4.75-10.29,9.18-15.53,13.28-8.47,6.63-17.1,12.35-25.93,17.06-12.8,6.83-26,11.51-39.71,13.65-.58.09-1.16.18-1.74.26-.9.13-1.79.26-2.69.37-13.13,1.71-25.98,1.83-38.76.58-1.71-.17-3.42-.36-5.13-.58-12.09-1.53-24.14-4.27-36.33-8.03-13.56-4.18-27.3-9.65-41.45-16.14-4.94-2.27-9.93-4.65-14.98-7.17-8.65-4.29-17.47-8.93-26.53-13.85-10.16-5.52-20.62-11.4-31.43-17.56-3.31-1.89-6.65-3.8-10.02-5.74-13.22-7.58-27-15.55-41.45-23.76-1.08-.62-2.17-1.23-3.25-1.85-12.23-6.93-24.94-14.03-38.21-21.23-6.19-3.36-12.49-6.73-18.93-10.11-7.33-3.86-14.84-7.74-22.52-11.63-13.01-6.58-26.54-13.17-40.63-19.72-.28-.13-.55-.26-.83-.38-13.3-6.17-27.1-12.31-41.45-18.36-10.07-4.25-20.41-8.45-31.04-12.6-3.44-1.34-6.91-2.68-10.41-4-11.12-4.22-22.54-8.39-34.29-12.46-2.38-.83-4.77-1.62-7.17-2.37-13.45-4.25-27.29-7.42-41.45-9.57-9.25-1.42-18.64-2.39-28.15-2.94-4.41-.25-8.84-.42-13.3-.49-7.97-.12-16.03.04-24.14.49-5.74.31-11.51.77-17.31,1.37-13.68,1.41-27.51,3.6-41.45,6.55-13.73,2.89-27.57,6.53-41.46,10.86-11.8,3.68-23.64,7.87-35.49,12.56-1.99.78-3.98,1.58-5.97,2.39-13.83,5.65-27.66,11.97-41.45,18.94-6.34,3.2-12.68,6.53-19,10.01-7.5,4.11-14.99,8.42-22.45,12.92-9.7,5.83-19.35,11.97-28.95,18.42-4.18,2.81-8.35,5.67-12.51,8.6-10.3,7.24-20.51,14.82-30.62,22.74-3.62,2.84-7.23,5.72-10.83,8.64-8.99,7.3-17.9,14.88-26.7,22.7-4.95,4.41-9.87,8.89-14.76,13.45-6.25,5.83-12.43,11.8-18.56,17.9-7.73,7.69-15.37,15.58-22.89,23.68-2.36,2.53-4.71,5.09-7.05,7.67-9.21,10.15-18.24,20.6-27.07,31.34"/>
                </svg>
                <div className={classes.cart} id='cart'></div>
            </>}
            {props.page.img && <img src={img[props.page.img]} className={classes[props.page.img]} /> }
            
            <div className={`${classes.textContainer} ${props.title.includes("התנגשות הרשאות") ? classes.tentText : ""}`}>
                <TextNav className={classes.TextNav}/>
            </div>
        </div>
    );
};

export default Intro;
