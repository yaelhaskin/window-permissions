import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import classes from "../../scss/About.module.scss";
import "../../scss/Animations.scss"

import logo from "../../assets/svg/white-logo.svg"
import backDarkArrow from "../../assets/svg/buttons/Arrows/backDarkArrow.svg"
import carousel from "../../assets/animations/carousel/data.json"; 

const About = (props) => {
    return (
        <div className={classes.About}>
            <img src={logo} alt='logo' className={classes.logo} onClick={() => props.setCurPage(0)}/>
            <h1 className={classes.title}>ABOUT US</h1>

            <div className={classes.textContainer}>
                <p> {props.text[0]} </p>
                <p> {props.text[1]} </p>
                <div className={classes.specialists}>
                    <p> {props.text[2]} </p>
                    <p> {props.text[3]} </p>
                </div>
                <p> {props.text[4]} </p>
            </div>

            <img src={backDarkArrow} alt='backArrow' className={classes.backArrow} onClick={() => props.setCurPage((prev) => prev - 1)} />

            <div className={classes.carouselAniContainer}>
                <Player src={carousel} autoplay loop controls={false}></Player>
            </div>
        </div>
    );
};

export default About;