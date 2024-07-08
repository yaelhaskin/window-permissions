import React from 'react';

import classes from "../../scss/BgElements.module.scss";

import cloud from "../../assets/svg/bg/cloud.svg"
import ferrisWheel from "../../assets/svg/bg/ferrisWheel.svg"
import ferrisWheelBottom from "../../assets/svg/bg/ferrisWheelBottom.svg"
import carousel from "../../assets/svg/bg/carousel.svg"
import hotAirBalloon from "../../assets/svg/bg/hotAirBalloon.svg"
import rollerCoaster from "../../assets/svg/bg/rollerCoaster.svg"
import tent from "../../assets/svg/bg/tent.svg"

const BgElements = ({bgElements}) => {
    
    return (
        <div className={classes.BgElements}>
            <img src={cloud} alt='cloud' className={classes.cloud}/>
            <img src={hotAirBalloon} alt='hotAirBalloon' className={classes.hotAirBalloon}/>  
            {bgElements.includes("ferrisWheel") && <div>
                <img src={ferrisWheel} alt='ferrisWheel' className={classes.ferrisWheel}/>
                <img src={ferrisWheelBottom} alt='ferrisWheelBottom' className={classes.ferrisWheelBottom}/>
            </div>}
            {bgElements.includes("rollerCoaster") && <img src={rollerCoaster} alt='rollerCoaster' className={classes.rollerCoaster}/>}            
            {bgElements.includes("carousel") && <img src={carousel} alt='carousel' className={classes.carousel}/>}        
            {bgElements.includes("tent") && <img src={tent} alt='tent' className={classes.tent}/>}        
        </div>
    );
};

export default BgElements;