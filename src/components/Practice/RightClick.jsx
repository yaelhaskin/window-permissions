import React, { useState, useEffect, useRef } from 'react';
import classes from "../../scss/RightClick.module.scss";

import rightClick from '../../assets/svg/rightClick/ntfsInheritance/properties.png'

// ntfsInheritance:
import folder from '../../assets/svg/rightClick/ntfsInheritance/Folder.svg'
import folderIcon from "../../assets/svg/rightClick/ntfsInheritance/FolderIcon.png"
import folderGeneral from '../../assets/svg/rightClick/ntfsInheritance/FolderGeneral.png'
import folderSecurity from '../../assets/svg/rightClick/ntfsInheritance/FolderSecurity.png'
import file from '../../assets/svg/rightClick/ntfsInheritance/File.svg'
import fileIcon from "../../assets/svg/rightClick/ntfsInheritance/FileIcon.png"
import fileGeneral from '../../assets/svg/rightClick/ntfsInheritance/FileGeneral.png'
import fileSecurity from '../../assets/svg/rightClick/ntfsInheritance/FileSecurity.png'

// ntfsRemoveInheritancePics:
import folder1Icon from "../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1Icon.svg"
import folder1General from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1General.png'
import folder1Security from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1Security.png'
import folder1Edit from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1Edit.png'
import folder1AllowWrite from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1AllowWrite.png'
import folder1Apply from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder1Apply.png'

import folder2 from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2.svg'
import folder2Icon from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2Icon.svg'
import folder2General from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2General.png'
import folder2Security from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2Security.png'
import folder2Advanced from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2Advanced.png'
import folder2Done1 from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2Done1.png'

import folderDisable from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder2Disable.png'

import folder3Icon from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3Icon.svg'
import folder3General from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3General.png'
import folder3Security from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3Security.png'
import folder3Advanced from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3Advanced.png'
import folder3Done2 from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3Done2.png'
import folder3Apply from '../../assets/svg/rightClick/ntfsRemoveInheritance/Folder3Apply.png'

// effectivePermissionsPics:
import folderAdvanced from '../../assets/svg/rightClick/effectivePermissions/FolderAdvanced.png'
import folderEffectiveAccess from '../../assets/svg/rightClick/effectivePermissions/FolderEffectiveAccess.png'
import folderSelect from '../../assets/svg/rightClick/effectivePermissions/FolderSelect.png'
import folderView from '../../assets/svg/rightClick/effectivePermissions/FolderView.png'

// ntfsPractice:
import fileEdit from '../../assets/svg/rightClick/ntfsPractice/FileEdit.svg'
import fileApply from '../../assets/svg/rightClick/ntfsPractice/FileApply.svg'

import ex from "../../assets/svg/rightClick/ntfsPractice/emptyBox.svg"
import check from "../../assets/svg/rightClick/ntfsPractice/fullBox.svg"

// sharePractice:
import folderSharing from '../../assets/svg/rightClick/sharePractice/FolderSharing.png'
import folderShareAdvanced from '../../assets/svg/rightClick/sharePractice/FolderAdvanced.png'
import folderSharePermissions from '../../assets/svg/rightClick/sharePractice/FolderPermissions.svg'
import folderApply from '../../assets/svg/rightClick/sharePractice/FolderApply.svg'

// clashPractice:
import folderSecurityA from '../../assets/svg/rightClick/clashPractice/FolderSecurityGroupA.png'
import folderSecurityB from '../../assets/svg/rightClick/clashPractice/FolderSecurityGroupB.png'
import folderSharingA from '../../assets/svg/rightClick/clashPractice/FolderSharingGroupA.png'
import folderSharingB from '../../assets/svg/rightClick/clashPractice/FolderSharingGroupB.png'

const RightClick = (props) => {
    const title = props.question.title;
    const textArray = props.question.text;
    const rightClickRef = useRef();

    let correctAnswer = "";
    title === "ntfsPractice" || title === "sharePractice" ? correctAnswer = props.question.correctAnswer : null;

    const ntfsInheritancePics = {
        folder: folder,
        folderIcon: folderIcon,
        folderGeneral: folderGeneral,
        folderSecurity: folderSecurity,

        file: file,
        fileIcon: fileIcon,
        fileGeneral: fileGeneral,
        fileSecurity: fileSecurity
    }
    const ntfsRemoveInheritancePics = {
        folder: folder,
        folderIcon: folder1Icon,
        folderGeneral: folder1General,
        folderSecurity: folder1Security,
        permissionsfolderEdit: folder1Edit,
        permissionsfolderAllowWrite: folder1AllowWrite,
        permissionsfolderApply: folder1Apply,
        
        folder2: folder2,
        folder2Icon: folder2Icon,
        folder2General: folder2General,
        folder2Security: folder2Security,
        inheritancefolder2Advanced: folder2Advanced,
        inheritancefolder2Disable: folderDisable,
        inheritancefolder2Done1: folder2Done1,
        
        folder3: folder2,
        folder3Icon: folder3Icon,
        folder3General: folder3General,
        folder3Security: folder3Security,
        inheritancefolder3Advanced: folder3Advanced,
        inheritancefolder3Disable: folderDisable,
        inheritancefolder3Done2: folder3Done2,
        inheritancefolder3Apply: folder3Apply,
        inheritancefolder3Yes: folder3Done2,
    }
    const effectivePermissionsPics = {
        folder: folder,
        folderIcon: folderIcon,
        folderGeneral: folderGeneral,
        folderSecurity: folderSecurity,
        inheritancefolderAdvanced: folderAdvanced,
        inheritancefolderEffectiveAccess: folderEffectiveAccess,
        inheritancefolderSelect: folderSelect,
        inheritancefolderView: folderView
    }
    const ntfsPracticePics = {
        folder: file,
        folderIcon: fileIcon,
        file: file,
        fileIcon: fileIcon,
        fileGeneral: fileGeneral,
        fileSecurity: fileSecurity,
        permissionsfileEdit: fileEdit,
        permissionsfileApply: fileApply
    }
    const sharePracticePics = {
        folder: folder,
        folderIcon: folderIcon,
        folderGeneral: folderGeneral,
        folderSecurity: folderSecurity,
        folderSharing: folderSharing,
        sharingfolderAdvanced: folderShareAdvanced,
        sharingfolderPermissions: folderSharePermissions,
        sharingfolderApply: folderApply
    }
    const clashPracticePics = {
        folder: folder,
        folderIcon: folderIcon,
        folderGeneral: folderGeneral,
        folderSecurity: folderSecurityA,
        folderSecurityA: folderSecurityA,
        folderSecurityB: folderSecurityB,
        folderSharing: folderSharing,
        sharingfolderAdvanced: folderShareAdvanced,
        sharingfolderPermissions: folderSharingA,
        sharingfolderPermissionsA: folderSharingA,
        sharingfolderPermissionsB: folderSharingB,
    }

    const curPics = {
        ntfsInheritance: ntfsInheritancePics,
        ntfsRemoveInheritance: ntfsRemoveInheritancePics,
        effectivePermissions: effectivePermissionsPics,
        ntfsPractice: ntfsPracticePics,
        sharePractice: sharePracticePics,
        clashPractice: clashPracticePics
    }

    const clickOrder = {
        ntfsInheritance: ["folderGeneral", "folderSecurity", "fileSecurity"],
        ntfsRemoveInheritance: ["folderGeneral", "folderSecurity", "permissionsfolderEdit", "permissionsfolderAllowWrite", "permissionsfolderApply",
            "folder2General", "folder2Security", "inheritancefolder2Advanced", "inheritancefolder2Disable", "inheritancefolder2Done1",
            "folder3General", "folder3Security", "inheritancefolder3Advanced", "inheritancefolder3Disable", "inheritancefolder3Done2", "inheritancefolder3Apply", "inheritancefolder3Yes"
        ],
        effectivePermissions: ["folderGeneral", "folderSecurity", "inheritancefolderAdvanced", "inheritancefolderEffectiveAccess", "inheritancefolderSelect", "inheritancefolderView"],
        ntfsPractice: ["fileGeneral", "fileSecurity", "permissionsfileEdit", "permissionsfileApply"],
        sharePractice: ["folderGeneral", "folderSharing", "sharingfolderAdvanced", "sharingfolderPermissions", "sharingfolderApply"],
        clashPractice: ["folderGeneral", "folderSecurity","folderSecurityA", "folderSecurityB", "folderSharing", "sharingfolderAdvanced", "sharingfolderPermissions", "sharingfolderPermissionsA", "sharingfolderPermissionsB"],
    }
    
    const [bigWindow, setBigWindow] = useState("folder");
    const [openWindows, setOpenWindows] = useState([]);
    const [displayBtn, setDisplayBtn] = useState("");
    const [textNum, setTextNum] = useState(0);
    const [canRightClick, setCanRightClick] = useState(true);
    const [isProperties, setIsProperties] = useState(false);

    const [selectedNTFS, setSelectedNTFS] = useState([])
    const [selectedShare, setSelectedShare] = useState([])

    const displayAllBtns = () => {
        setDisplayBtn(clickOrder["clashPractice"].map(item => item.toLowerCase()).join(' ').replace(/sharingfolder/g, ''));
    }

    const handleRightClick = (event) => {
        event.preventDefault();
        setCanRightClick(false);
        setIsProperties(true);
        rightClickRef.current.style.display = "block"
        const posX = event.pageX;
        const posY = event.pageY;
        rightClickRef.current.style.top = `${posY}px`;
        rightClickRef.current.style.left = `${posX}px`;
    };

    const handleDoubleClick = (event) => {
        if (!title.includes("Practice") && event.detail === 2) {
            setCanRightClick(true);
            setBigWindow(title === "ntfsRemoveInheritance" ? "folder2" : "file");
        }
    }

    const handleProperties =() => {
        setIsProperties(false); 
        setOpenWindows((prev) => [...prev, {name: bigWindow, type: "General"}]);
        title === "clashPractice" ? displayAllBtns() : setDisplayBtn(clickOrder[title][1]);
    }

    const handleBtnClick = (action, newType, newName) => {
        if (action === "ex") {
            setOpenWindows((prev) => prev.filter((item, index) => index !== newName));
            setCanRightClick(true);
        } else if (action === "add") {
            setOpenWindows((prev) => [...prev, {name: newName, type: newType}]);
        } else {
            setOpenWindows((prev) => prev.map((pic) => (pic.name === openWindows[newName].name ? {...pic, type: newType} : pic)));
        }
        let curBtnIndex = clickOrder[title].indexOf(`${openWindows[openWindows.length - 1].name}${openWindows[openWindows.length - 1].type}`) + 1;
        let showNextBtn = clickOrder[title][curBtnIndex + 1];
        title === "clashPractice" ? displayAllBtns() : setDisplayBtn((prev) => showNextBtn ? showNextBtn : prev);
    }

    const showBtn = (btn) => {
        return displayBtn.toLowerCase().includes(btn) ? true : false;
    }

    // change displayed text
    useEffect(() => {
        switch (title) {
            case "ntfsInheritance": 
                if (openWindows[0]?.type === "Security") {
                    setTextNum(1)
                } 
                if (openWindows[1]?.type === "Security") {
                    setTextNum(2)
                }
            break;
            case "ntfsRemoveInheritance":
                if (openWindows[0]?.name === "folder2" && openWindows[0]?.type === "Security") {
                    setTextNum((prev) => prev > 2 ? prev : 2)
                } 
                if (openWindows[1]?.name === "inheritance" && openWindows[1]?.type === "Done1") {
                    setTextNum(3)
                } 
            break;
            case "ntfsPractice":
                openWindows[1]?.type === "Apply" && props.setAnswered(true);
            break;
        }
    }, [openWindows])

    useEffect(() => {
        setCanRightClick(true);
        if (textNum === 4) {
            setBigWindow("folder3");
        }
    }, [textNum])

    useEffect(() => {
        setBigWindow(title === "ntfsPractice" ? "file" : "folder");
        setOpenWindows([]);
        setDisplayBtn("");
        setTextNum(0);
        setCanRightClick(true);
        setIsProperties(false);
        setSelectedNTFS([
            { name: "FC", bool: true },
            { name: "Modify", bool: true },
            { name: "ReadExecute", bool: true },
            { name: "Read", bool: true },
            { name: "Write", bool: true}
        ])
        setSelectedShare([
            { name: "FC", bool: false },
            { name: "Change", bool: false },
            { name: "Read", bool: true }
        ])
    }, [])

    return (
        <div className={classes.RightClick}>
            <p> {textArray[textNum]} </p>

            <div className={classes.container}>
                <img src={curPics[title][bigWindow]} alt='folder' className={classes.folder} />
                <div onContextMenu={(event) => canRightClick ? handleRightClick(event) : null} 
                    onClick={(event) => handleDoubleClick(event)} 
                    style={{backgroundImage: `url(${curPics[title][`${bigWindow}Icon`]})`}}
                    className={classes.icon}
                ></div>
            </div>

            <div ref={rightClickRef} className={classes.rightClick}>
                {isProperties && <img src={rightClick} alt='rightClick' />}
                <div className={classes.propertiesBtn} onClick={() => handleProperties()}></div>
            </div>

            <div className={classes.openPropertiesContainer}>
                {openWindows.map((pic, index) => (
                    <div key={pic.name} className={classes.properties} style={pic.name.includes("inheritance") ? {width: "60%"} : null}>
                        {curPics[title][`${openWindows[index].name}${pic.type}`] && 
                            <img src={curPics[title][`${pic.name}${pic.type}`]} alt='properties' />
                        }
                        
                        <div className={`${classes.btn} ${classes.exBtn}`} 
                        onClick={() => handleBtnClick("ex", "", index)}></div>

                        <div className={`${classes.btn} ${classes.generalBtn}`} 
                        onClick={() => handleBtnClick("change", "General", index)}></div>

                        {showBtn("security") &&
                            <div className={`${classes.btn} ${bigWindow !== "file" ? classes.securityBtn : classes.sharingBtn}`} 
                            onClick={() => handleBtnClick("change","Security", index)}></div>
                        }
                        
                        {showBtn("sharing") && 
                            <div className={`${classes.btn} ${classes.sharingBtn}`} 
                            onClick={() => handleBtnClick("change","Sharing", index)}></div>
                        }

                        {showBtn("advanced") && !showBtn("sharingfolderadvanced") &&
                            <div className={`${classes.btn} ${classes.advanced}`} 
                            onClick={() => handleBtnClick("add","Advanced", `inheritance${bigWindow}`)}></div>
                        }
                        {showBtn("edit") && 
                            <div className={`${classes.btn} ${classes.editBtn}`} 
                            onClick={() => handleBtnClick("add", "Edit", `permissions${bigWindow}`)}></div>
                        }
                        {showBtn("allowwrite") && 
                            <div className={`${classes.btn} ${classes.allowWrite}`} 
                            onClick={() => handleBtnClick("change", "AllowWrite", index)}></div>
                        }
                        {showBtn("apply") && !showBtn("inheritancefolder3apply") && 
                            <div className={`${classes.btn} ${classes.apply} ${title.includes("Practice") ? classes.moveTop : null}`} 
                            onClick={() => handleBtnClick("change", "Apply", index)}></div>
                        }
                        {showBtn("disable") && 
                            <div className={`${classes.btn} ${classes.disable}`} 
                            onClick={() => handleBtnClick("change", "Disable", index)}></div>
                        }
                        {showBtn("done1") && 
                            <div className={`${classes.btn} ${classes.done1}`} 
                            onClick={() => {handleBtnClick("change", "Done1", index); setTextNum(3)}}></div>
                        }
                        {showBtn("done2") && 
                            <div className={`${classes.btn} ${classes.done2}`} 
                            onClick={() => handleBtnClick("change", "Done2", index)}></div>
                        }
                        {showBtn("yes") && 
                            <div className={`${classes.btn} ${classes.yes}`} 
                            onClick={() => handleBtnClick("change", "Yes", index)}></div>
                        }
                        {showBtn("inheritancefolder3apply") && 
                            <div className={`${classes.btn} ${classes.applySmall}`} 
                            onClick={() => handleBtnClick("change", "Apply", index)}></div>
                        }
                        {showBtn("effectiveaccess") && 
                            <div className={`${classes.btn} ${classes.effectiveAccess}`} 
                            onClick={() => {handleBtnClick("change", "EffectiveAccess", index); setTextNum((prev) => prev + 1)}}></div>
                        }
                        {showBtn("select") && 
                            <div className={`${classes.btn} ${classes.select}`} 
                            onClick={() => handleBtnClick("change", "Select", index)}></div>
                        }
                        {showBtn("view") && 
                            <div className={`${classes.btn} ${classes.view}`} 
                            onClick={() => handleBtnClick("change", "View", index)}></div>
                        }

                        {title.includes("Practice") ? (<>
                            {showBtn("advanced") && 
                                <div 
                                    className={`${classes.btn} ${classes.advancedShare}`} 
                                    onClick={() => handleBtnClick("add", "Advanced", `sharing${bigWindow}`)}
                                ></div>
                            }
                            {showBtn("permissions") &&
                                <div 
                                    className={`${classes.btn} ${classes.permissionsShare}`} 
                                    onClick={() => handleBtnClick("change", "Permissions", index)}
                                ></div>
                            }
                            {showBtn("securitya") && 
                                <div 
                                    className={`${classes.btn} ${classes.securityGroupA}`} 
                                    onClick={() => handleBtnClick("change", "Security", index)}
                                ></div>
                            }
                            {showBtn("securityb") && 
                                <div 
                                    className={`${classes.btn} ${classes.securityGroupB}`} 
                                    onClick={() => handleBtnClick("change", "SecurityB", index)}
                                ></div>
                            }
                            {showBtn("permissionsa") && 
                                <div 
                                    className={`${classes.btn} ${classes.sharingGroupA}`} 
                                    onClick={() => handleBtnClick("change", "PermissionsA", index)}
                                ></div>
                            }
                            {showBtn("permissionsb") && 
                                <div 
                                    className={`${classes.btn} ${classes.sharingGroupB}`} 
                                    onClick={() => handleBtnClick("change", "PermissionsB", index)}
                                ></div>
                            }
                        </>) : null}
                    </div>
                ))}
            </div>
            {(title === "ntfsPractice" && (openWindows[1] && openWindows[1].name === "permissionsfile")) && 
                selectedNTFS.map((permission, index) => (
                    <img key={permission.name} 
                        src={permission.bool ? check : ex} 
                        className={`${classes.ntfsBtn} ${classes[`ntfs${permission.name}`]}`} 
                        style={openWindows[1].type === "Apply" ? (permission.bool === correctAnswer[index].bool ? {border: "solid #77C688 2.5px"} : {border: "solid #EB5270 2.5px"}) : null}
                        onClick={() => setSelectedNTFS((prev) => prev.map((obj) => obj.name === permission.name ? {...obj, bool: !obj.bool} : obj) )} 
                    />
                )
            )}
            {(title === "sharePractice" && (openWindows[1] && (openWindows[1].type === "Permissions" || openWindows[1].type === "Apply"))) && 
                selectedShare.map((permission, index) => (
                    <img key={permission.name} 
                    src={permission.bool ? check : ex} 
                    className={`${classes.ntfsBtn} ${classes[`share${permission.name}`]}`} 
                    style={openWindows[1].type === "Apply" ? (permission.bool === correctAnswer[index].bool ? {border: "solid #77C688 2.5px"} : {border: "solid #EB5270 2.5px"}) : null}
                    onClick={() => setSelectedShare((prev) => prev.map((obj) => obj.name === permission.name ? {...obj, bool: !obj.bool} : obj) )} 
                    />
                )
            )}
            {(openWindows[1] && ((bigWindow === "folder2" && openWindows[1].type === "Done1") || (openWindows[1].type === "Apply" && (bigWindow !== "folder3" && !title.includes("Practice"))))) && 
                <div className={classes.littleArrow} onClick={() => {setOpenWindows([]); setTextNum((prev) => prev + 1)}}></div>
            }
        </div>
    );
};

export default RightClick;