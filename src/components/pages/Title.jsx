import React, {} from 'react';

import logo from "../../assets/svg/white-logo.svg"
import bigBtn from "../../assets/svg/buttons/bigBtn.svg"
import arrow from "../../assets/svg/buttons/Arrows/v-arrow.svg"

import classes from "../../scss/Title.module.scss";

const Title = (props) => {
    const handleBtnClick = (info) => {
        if (info === "Start") {
            props.setCurPage(1);
        } else if (info === "ABOUT US") {
            props.setCurPage(47);
        } else if (info === "RE-START") {
            props.setCurPage(2);
        }
    }

    const handleLogo = () => {
        if (props.curPage === 0) {
            props.setCurPage(47);
        } else {
            props.setCurPage(0);
        }
    }

    return (
        <div className={classes.Title}>
            <img src={logo} alt='logo' className={classes.logo} onClick={handleLogo}/>

            {<div className={classes.title}>
                { props.title === "Start" ? 
                <>
                    <h1 className={classes.windows}>WINDOWS</h1>
                    <h1 className={classes.permissions}>PERMISSIONS</h1>
                </>
                :
                <h1 className={classes.fin}>Fin.</h1>
                }
            </div>}

            { props.text.map((info) => {
                return <div key={info} className={[`${classes.btn} ${classes[`btn${info[0]}`]}`]} onClick={() => handleBtnClick(info)} >
                    <img src={arrow} alt='v-right' />
                    <img src={bigBtn} alt='startBtn' />
                    <h2 className={`${classes[`text${info[0]}`]}`}> {info} </h2>
                    <img src={arrow} alt='v-left' className={classes.arrowLeft} />
                </div>
            }) 
            }
        </div>
    );
};

export default Title;