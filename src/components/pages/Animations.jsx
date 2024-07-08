import React, { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import seniors from "../../assets/animations/1seniors/data.json"; 
import food from "../../assets/animations/2food/data.json"; 
import keys from "../../assets/animations/3keys/data.json"; 
import giftShop from "../../assets/animations/4giftshop/data.json"; 
import bushes from "../../assets/animations/5bushes/data.json"; 

import classes from "../../scss/Animations.module.scss";
import "../../scss/Animations.scss"

const Animations = (props) => {
    const [aniOver, setAniOver] = useState(false);

    const curAni = {
        seniors: seniors,
        food: food,
        keys: keys,
        giftShop: giftShop,
        bushes: bushes
    }

    return (
        <div className={classes.Animations}>
            <p className={classes.text0}> {props.text[0]} </p>

            <Player 
                src={curAni[props.title]}
                loop={false}
                controls={true}
                onEvent={(event) => event === "complete" ? (setAniOver(true), props.setAnswered(true)) : null}
            > 
                <Controls 
                visible={true} buttons={['play']} 
                />
            </Player>

            {(aniOver || props.visitedPages.includes(props.curPage)) && <p className={classes.text1}> {props.text[1]} </p>}
        </div>
    );
};

export default Animations;
