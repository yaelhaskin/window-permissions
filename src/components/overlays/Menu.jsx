import React, { useState } from 'react';

import classes from "../../scss/Menu.module.scss";
import content, {menuContent} from "../../content.json"

import ex from "../../assets/svg/buttons/ex.svg"

const Menu = (props) => {
    const [curList, setCurList] = useState("NTFS")

    return (
        <div>
            <div className={classes.whiteBg}></div>

            <div className={classes.Menu}>
                <img src={ex} alt="ex" className={classes.ex} onClick={() => props.setShowMenu(false)}/>
                <p className={classes.title}>Menu</p>
                <div className={classes.bigContainer}>
                    <div className={classes.subjectsContainer}>
                        {menuContent.subjects.map((item) => {
                            return <div key={item} 
                                    style={curList === item ? { backgroundColor: "#507CAD" } : {}} 
                                    className={classes.subject} 
                                    onClick={() => setCurList(item)}
                                > {item} </div>
                        })}
                    </div>
                    <div className={classes.listContainer}>
                        {menuContent.list[curList].map(({text, page}) => {
                            return <div key={text} onClick={() => props.setCurPage(page)}> {text} </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;