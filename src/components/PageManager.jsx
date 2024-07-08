import React, { useState, createContext, useEffect } from "react";

import data from "../pages.json"

import Title from "./pages/Title"
import Intro from "./pages/Intro"
import Map from "./pages/Map"
import Animaion from "./pages/Animations"
import Stand from "./pages/Stand"
import Example from "./overlays/Example"
import Practice from "./pages/Practice"
import Menu from "./overlays/Menu"
import About from "./pages/About"
import BgElements from "./overlays/BgElements"
import Arrows from "./overlays/Arrows"

export const PageContext = createContext({ curPage: 0 });

const PageManager = () => {
    const [curPage, setCurPage] = useState(0);
    const [visitedPages, setVisitedPages] = useState([]);

    const page = data.pages[curPage];

    let curPageName = page.name;
    let curPageBg = page.bgAnimations;
    let curPageArrows = page.arrows;
    let curPageTitle = page.title;
    let curPageText = page.text;
    
    let standType = page.standType;
    let popUp = page["pop-up"];

    const [showMenu, setShowMenu] = useState(false);
    const [showExample, setShowExample] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [visitedMap, setVisitedMap] = useState({
        intro: false,
        NTFS: false,
        SHARE: false,
        CLASH: false
    })

    useEffect(() => {
        setShowMenu(false);
        setShowExample(false);
        setShowPopUp(false);
        setAnswered(false);

        setVisitedPages((prev) => prev.includes(curPage) ? prev : [...prev, curPage -1]);
    }, [curPage])

    const displayedPage = {
        "Title": <Title text={curPageText} title={curPageTitle} curPage={curPage} setCurPage={setCurPage} />,
        "Intro": <Intro page={page} text={curPageText} title={curPageTitle} setShowMenu={setShowMenu} setVisitedMap={setVisitedMap}/>,
        "Map": <Map text={curPageText} visitedMap={visitedMap} curPage={curPage} setCurPage={setCurPage} setShowMenu={setShowMenu}/>,
        "Animation": <Animaion text={curPageText} title={curPageTitle} curPage={curPage} visitedPages={visitedPages} setAnswered={setAnswered} />,
        "Stand": <Stand title={curPageTitle} curPage={curPage} type={standType} popUp={popUp} showPopUp={showPopUp} setShowPopUp={setShowPopUp} setShowExample={setShowExample} setShowMenu={setShowMenu}/>,
        "Practice": <Practice text={curPageText} curPage={curPage} answered={answered} setAnswered={setAnswered} setVisitedMap={setVisitedMap} setShowMenu={setShowMenu}/>,
        "About": <About text={curPageText} setCurPage={setCurPage} />,
    }

    return (
        <div>
            <PageContext.Provider value={{ curPage }}>
                {curPageBg && <BgElements bgElements={curPageBg}/>}

                {displayedPage[curPageName]}

                {!showPopUp && <Arrows arrows={curPageArrows} visitedPages={visitedPages} answered={answered} setCurPage={setCurPage} />}
                { (showExample || showPopUp) && <Example popUp={popUp} showPopUp={showPopUp} setAnswered={setAnswered} setShowExample={setShowExample} question={page.rightClick}/> }
                { showMenu && <Menu setShowMenu={setShowMenu} setCurPage={setCurPage}/>}
            </PageContext.Provider>
        </div>
    )
}

export default PageManager;
