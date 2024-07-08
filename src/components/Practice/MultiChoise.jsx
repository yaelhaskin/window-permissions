import React, { useState, useEffect, Fragment } from 'react';

import classes from "../../scss/Practice.module.scss";

import cornerLine from "../../assets/svg/buttons/cornerLine.svg"

const MultiChoise = (props) => {
    const followQuestion = props.question.followQuestion;
    const correctAnswer = props.question.correctAnswer;

    const [clickdTerms, setClickdTerms] = useState([]);
    const [showFollowQuestion, setShowFollowQuestion] = useState(false);
    const [correct, setCorrect] = useState(0);

    const clickedTerm = (event, termClicked, qIndex) => {
        let backgroundColor;
        if(correctAnswer[qIndex].includes(termClicked)) {
            backgroundColor = "#77C688";
            setClickdTerms((prev) => [...prev, termClicked]);
            setCorrect((prev) => prev + 1);
        } else {
            backgroundColor = "#EB5270";
        }
        event.target.style.color = "#3C153B";
        event.target.style.borderColor = backgroundColor;
        event.target.style.backgroundColor = backgroundColor;
    }

    const btnElements = (question, qIndex) => {
        return question.map((term, tIndex) => {
            return <Fragment key={term} >
                <div className={classes.select} onClick={(event) => clickedTerm(event, term, qIndex)}> {term} </div>
                {props.curPage !== 44 && tIndex === 0 && <span>או</span>}
            </Fragment>
        })
    }

    useEffect(() => {
        if (followQuestion !== "" && correct === correctAnswer.length - 1) {
            setShowFollowQuestion(true);
        } else if (correct === correctAnswer.length) {
            props.setAnswered(true);
        }
    }, [clickdTerms])

    useEffect(() => {
        setClickdTerms([]);
        setShowFollowQuestion(false);
        setCorrect(0);
    }, [props.question])

    return (
        <div className={`${classes.MultiChoise} ${classes[`big${props.standType}`]}`}>
                {props.question && props.question.questions.map((question, qIndex) => {
                    return <div key={qIndex}
                        className={`${classes.selectContainer} 
                                    ${classes[`select${props.standType}`]}
                                    ${props.curPage === 44 && classes.selectMulti}`
                        }>
                        {btnElements(question, qIndex)}
                    </div>
                })}
            {followQuestion !== "" && showFollowQuestion && 
            <div className={[`${classes.selectContainer} ${classes.arrows}`]} >
                    <img src={cornerLine} alt='cornerLine' className={[`${classes.cornerLine} ${classes.cornerLineLeft}`]}/>
                    {btnElements(followQuestion, 2)}
                    <img src={cornerLine} alt='cornerLine' className={classes.cornerLine}/>
            </div>}
        </div>
    );
};

export default MultiChoise;