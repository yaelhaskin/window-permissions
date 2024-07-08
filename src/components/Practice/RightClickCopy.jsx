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
        folderSecurityB: folderSecurityB,
        folderSharing: folderSharing,
        sharingfolderAdvanced: folderShareAdvanced,
        sharingfolderPermissions: folderSharingA,
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

    const [isProperties, setIsProperties] = useState(false);
    const [textNum, setTextNum] = useState(0);

    const [bigWindow, setBigWindow] = useState("folder");
    const [openWindows, setOpenWindows] = useState([])

    const [selectedNTFS, setSelectedNTFS] = useState([])
    const [selectedShare, setSelectedShare] = useState([])

    const handleRightClick = (event) => {
        event.preventDefault();
        setIsProperties(true);
        rightClickRef.current.style.display = "block"
        const posX = event.pageX;
        const posY = event.pageY;
        rightClickRef.current.style.top = `${posY}px`;
        rightClickRef.current.style.left = `${posX}px`;
    };

    useEffect(() => {
        if(title === "ntfsInheritance") {
            if (openWindows[0] && openWindows[0].type === "Security") {
                setTextNum(1)
            } 
            if (openWindows[1] && openWindows[1].type === "Security") {
                setTextNum(2)
            }
        }

        if(title === "ntfsRemoveInheritance") {
            if (openWindows[0] && openWindows[0].name === "folder2" && openWindows[0].type === "Security") {
                setTextNum((prev) => prev > 2 ? prev : 2)
            } 
            if (openWindows[1] && openWindows[1].name === "inheritance" && openWindows[1].type === "Done1") {
                setTextNum(3)
            } 
        }

        if(title === "ntfsPractice" && (openWindows[1] && openWindows[1].type === "Apply")) {
            props.setAnswered(true);
        }
    }, [openWindows])

    useEffect(() => {
        if (textNum === 4) {
            setBigWindow("folder3");
        }
    }, [textNum])

    useEffect(() => {
        setIsProperties(false);
        setTextNum(0);
        setBigWindow(title === "ntfsPractice" ? "file" : "folder");
        setOpenWindows([]);
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
                <div onContextMenu={(event) => handleRightClick(event)} 
                    onClick={(event) => (!title.includes("Practice") && event.detail === 2) && setBigWindow(title === "ntfsRemoveInheritance" ? "folder2" : "file")} 
                    style={{backgroundImage: `url(${curPics[title][`${bigWindow}Icon`]})`}}
                    className={classes.icon}
                ></div>
            </div>

            <div ref={rightClickRef} className={classes.rightClick}>
                {isProperties && <img src={rightClick} alt='rightClick' />}
                <div className={classes.propertiesBtn} 
                onClick={() => {setIsProperties(false); setOpenWindows((prev) => [...prev, {name: bigWindow, type: "General"}])}}
                ></div>
            </div>

            <div className={classes.openPropertiesContainer}>
                {openWindows.map((pic, index) => (
                    <div key={pic.name} className={classes.properties} style={pic.name.includes("inheritance") ? {width: "60%"} : null}>
                        {curPics[title][`${openWindows[index].name}${pic.type}`] && 
                            <img src={curPics[title][`${pic.name}${pic.type}`]} alt='properties' />
                        }
                        {/* change pic to General */}
                        <div className={`${classes.btn} ${classes.generalBtn}`} 
                            onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                pic.name === openWindows[index].name ? {...pic, type: "General"} : pic
                            )))}
                        ></div>
                        {/* change pic to Sharing */}
                        {(title !== "ntfsPractice" && title.includes("Practice")) && 
                            <div className={`${classes.btn} ${classes.sharingBtn}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Sharing"} : pic
                                )))}
                            ></div>
                        }
                        {/* change pic to Security */}
                        <div className={`${classes.btn} ${bigWindow !== "file" ? classes.securityBtn : classes.sharingBtn}`} 
                            onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                pic.name === openWindows[index].name ? {...pic, type: "Security"} : pic
                            )))}
                        ></div>

                        {/* ntfsRemoveInheritance or effectivePermissions - open another screen, change new pic to Advanced */}
                        {((title === "ntfsRemoveInheritance" && (bigWindow === "folder2" || bigWindow === "folder3")) || title === "effectivePermissions") && 
                            <div className={`${classes.btn} ${classes.advanced}`} 
                                onClick={() => setOpenWindows((prev) => [...prev, {name: `inheritance${bigWindow}`, type: "Advanced"}])}
                            ></div>
                        }

                        {/* ntfsRemoveInheritance - open another screen, change new pic to Edit */}
                        {((title === "ntfsRemoveInheritance" && bigWindow === "folder") || title === "ntfsPractice") && 
                            <div className={`${classes.btn} ${classes.editBtn}`} 
                                onClick={() => setOpenWindows((prev) => [...prev, {name: `permissions${bigWindow}`, type: "Edit"}])}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance - change second pic to AllowWrite */}
                        {(title === "ntfsRemoveInheritance" && bigWindow === "folder") && 
                            <div className={`${classes.btn} ${classes.allowWrite}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "AllowWrite"} : pic
                                )))}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance or Practice - change second pic to Apply */}
                        {((title === "ntfsRemoveInheritance" && bigWindow === "folder") || title.includes("Practice")) && 
                            <div className={`${classes.btn} ${classes.apply} ${title.includes("Practice") ? classes.moveTop : null}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Apply"} : pic
                                )))}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance - change second pic to Disable */}
                        {(title === "ntfsRemoveInheritance" && (bigWindow === "folder2" || bigWindow === "folder3")) && 
                            <div className={`${classes.btn} ${classes.disable}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Disable"} : pic
                                )))}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance - change second pic to Done1 */}
                        {(title === "ntfsRemoveInheritance" && (bigWindow === "folder2")) && 
                            <div className={`${classes.btn} ${classes.done1}`} 
                                onClick={() => { setTextNum(3); setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Done1"} : pic
                                )))}}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance - change second pic to Done2 */}
                        {(title === "ntfsRemoveInheritance" && (bigWindow === "folder3")) && 
                            <div className={`${classes.btn} ${classes.done2}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Done2"} : pic
                                )))}
                            ></div>
                        }
                        {/* ntfsRemoveInheritance - change second pic to Apply */}
                        {(title === "ntfsRemoveInheritance" && (bigWindow === "folder3")) && 
                            <div className={`${classes.btn} ${classes.applySmall}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Apply"} : pic
                                )))}
                            ></div>
                        }
                        {/* effectivePermissions - change second pic to EffectiveAccess */}
                        {(title === "effectivePermissions") && 
                            <div className={`${classes.btn} ${classes.effectiveAccess}`} 
                                onClick={() => {
                                    setOpenWindows((prev) => prev.map((pic) => (
                                        pic.name === openWindows[index].name ? {...pic, type: "EffectiveAccess"} : pic
                                    ))); 
                                    setTextNum((prev) => prev + 1)
                                }}
                            ></div>
                        }
                        {/* effectivePermissions - change second pic to Select */}
                        {(title === "effectivePermissions") && 
                            <div className={`${classes.btn} ${classes.select}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Select"} : pic
                                )))}
                            ></div>
                        }
                        {/* effectivePermissions - change second pic to View */}
                        {(title === "effectivePermissions") && 
                            <div className={`${classes.btn} ${classes.view}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "View"} : pic
                                )))}
                            ></div>
                        }

                        {/* Practice - open another screen, change new pic to advancedShare */}
                        {(title.includes("Practice") && !openWindows[1]) && 
                            <div className={`${classes.btn} ${classes.advancedShare}`} 
                                onClick={() => setOpenWindows((prev) => [...prev, {name: `sharing${bigWindow}`, type: "Advanced"}])}
                            ></div>
                        }
                        {/* effectivePermissions - change second pic to PermissionsShare */}
                        {(title.includes("Practice") && (openWindows[1] && openWindows[1].type === "Advanced")) && 
                            <div className={`${classes.btn} ${classes.permissionsShare}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Permissions"} : pic
                                )))}
                            ></div>
                        }
                        {title === "clashPractice" && 
                            <div className={`${classes.btn} ${classes.securityGroupA}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Security"} : pic
                                )))}
                            ></div>
                        }
                        {title === "clashPractice" && 
                            <div className={`${classes.btn} ${classes.securityGroupB}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "SecurityB"} : pic
                                )))}
                            ></div>
                        }
                        {title === "clashPractice" && 
                            <div className={`${classes.btn} ${classes.sharingGroupA}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "Permissions"} : pic
                                )))}
                            ></div>
                        }
                        {title === "clashPractice" && 
                            <div className={`${classes.btn} ${classes.sharingGroupB}`} 
                                onClick={() => setOpenWindows((prev) => prev.map((pic) => (
                                    pic.name === openWindows[index].name ? {...pic, type: "PermissionsB"} : pic
                                )))}
                            ></div>
                        }
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