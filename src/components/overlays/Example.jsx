import React, { useContext, useEffect, useState } from 'react';

import classes from "../../scss/Example.module.scss";
import content from "../../content.json"

import RightClick from '../Practice/RightClick';

import ex from "../../assets/svg/buttons/ex.svg"
import readOrderPic from "../../assets/svg/popUp/readOrder.svg"
import copyAndMovePic from "../../assets/svg/popUp/copyAndMove.svg"

const Example = (props) => {
    const question = content.examples[props.question];
    const curPopUp = content['pop-up'][props.popUp];
    const btnColor = curPopUp && curPopUp.btnColors;

    const [showColor, setShowColor] = useState({
        "List": false,
        "Read": false,
        "Read&Execute": false,
        "Write": false,
        "Modify": false,
        "Full Control": false,
    })

    const popUpPic = {
        "readOrder": readOrderPic,
        "copyAndMove": copyAndMovePic
    }

    useEffect(() => {
        if(curPopUp) {
            props.setAnswered(true)
        }
    }, [])

    return (
        <div className={classes.ExampleAll}>
            {!props.showPopUp ? <div>
                <div className={classes.purpleBg}></div>

                <div className={classes.Example}>
                    <p className={classes.title}>דוגמה:</p>
                </div>
                <RightClick question={question}/>
                <img src={ex} alt="ex" className={classes.ex} onClick={() => {props.setShowExample(false), props.setAnswered(true)}}/>
            </div>
            :
            <div className={classes.PopUp}>
                <p className={classes.title}> {curPopUp.title} </p>

                {props.popUp === "permission-types" ? <>
                    <p className={classes.subTilte}>לחצו על סוגי הרשאות כדי לראות מה הן מאפשרת לעשות</p>
                    <div className={`${classes.circleContainer} ${classes.fileCircle}`}>
                        {curPopUp.buttons.map((color) => showColor[`${color}`] && <div key={color} style={{ backgroundColor: color !== "List" ? `${btnColor[color]}` : "transparent"}} className={`${classes[`${color.replace(/\&/g, '').replace(/\s/g, '')}Circle`]} ${classes.circle} ${color === "Read" && classes.ReadCircleFile} ${color === "Write" && classes.WriteCircleFile}`}></div>)}
                        {showColor.Modify && <div className={`${classes.ModifyExtra} ${classes.ModifyExtraFile}`}></div>}
                    </div>
                    <div className={`${classes.circleContainer} ${classes.folderCircle}`}>
                        {curPopUp.buttons.map((color) => showColor[`${color}`] && <div key={color} style={{ backgroundColor: btnColor[color]}} className={`${classes[`${color.replace(/\&/g, '').replace(/\s/g, '')}Circle`]} ${classes.circle}`}></div>)}
                        {showColor.Modify && <div className={classes.ModifyExtra}></div>}
                    </div>

                    <div className={classes.btnContainer}>
                        {curPopUp.buttons.map((btn) => ( 
                            <div key={btn} 
                                onClick={() => setShowColor((prev) => ({...prev, [btn]: !prev[btn]}))} 
                                style={showColor[btn] ? { border: "double 7.5px #C6BECB", backgroundColor: btnColor[`${btn}`], color: "#E9E8EE"} : { borderColor: btnColor[`${btn}`], color: btnColor[`${btn}`]}} 
                                className={classes.popUpBtn}
                            > {btn} </div> 
                        ))}
                    </div>
                    {curPopUp.plainText.map(({type, text}) => (<div key={type} className={classes.plainTextContainer} style={type === "קובץ" ? {width: "60%"} : null}>
                        <p className={classes.plainTitle}>על {type}: </p>
                        {text.map((text, index) => ( <div key={text} className={`${classes.plainText} ${classes[type]}`}> {text} </div> ))}
                    </div>))}
                </>
                :
                <img src={popUpPic[`${props.popUp}`]} alt='popUp' className={classes.popUpPic} style={{width: props.popUp === "copyAndMove" ? "45%" : "35%"}}/>}
            </div>}
        </div>
    );
};

export default Example;
