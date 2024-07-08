import React from 'react';

import classes from "../../scss/Map.module.scss";

import introBefore from "../../assets/svg/map/intro-before.svg"
import introAfter from "../../assets/svg/map/intro-after.svg"
import NTFSBefore from "../../assets/svg/map/NTFS-before.svg"
import NTFSAfter from "../../assets/svg/map/NTFS-after.svg"
import SHAREBefore from "../../assets/svg/map/SHARE-before.svg"
import SHAREafter from "../../assets/svg/map/SHARE-after.svg"
import CLASHBefore from "../../assets/svg/map/clash-before.svg"
import CLASHAfter from "../../assets/svg/map/clash-after.svg"
import menuCloud from "../../assets/svg/buttons/Menu/menuCloud.svg"

const Map = (props) => {
    return (
        <div className={classes.Map}>
            <img src={menuCloud} alt="menuCloud" className={classes.menuCloud} onClick={() => props.setShowMenu(true)}/>
            <p className={classes.text}> {props.text[0]} </p>
            <div className={classes.mapImg}>
                <img src={props.visitedMap.intro ? introAfter : introBefore } onClick={() => props.setCurPage(3)} alt='intro' className={classes.intro}/>
                <img src={props.visitedMap.NTFS ? NTFSAfter : NTFSBefore } onClick={() => props.setCurPage(8)} alt='ntfs' className={classes.ntfs}/>
                <img src={props.visitedMap.SHARE ? SHAREafter : SHAREBefore} onClick={() => props.setCurPage(26)} alt='share' className={classes.share}/>
                <img src={props.visitedMap.CLASH ? CLASHAfter : CLASHBefore} onClick={() => props.setCurPage(35)} alt='clash' className={classes.clash}/>
            </div>
        </div>
    );
};

export default Map;