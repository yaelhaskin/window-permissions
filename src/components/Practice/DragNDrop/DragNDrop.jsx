import React, {useEffect, useState} from 'react';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DragTerm from './DragTerm';
import DropContainer from './DropContainer';

import classes from "./DragNDrop.module.scss";

import checkBtn from "../../../assets/svg/buttons/checkBtn.svg"
import arrow from "../../../assets/svg/buttons/Arrows/v-arrow.svg"

const DragNDrop = (props) => {
  const question = props.question;
  const columnsArray = question.columns;
  const termsArray = question[props.type].terms;
  const finalColumnsArray = question[props.type].final;

  const [terms, setTerms] = useState([]);

  useEffect(() => {
    setTerms([]);
  }, [props.curPage])
  
  const handleDrop = (curTerm, curColumn) => {
    setTerms((prev) => {
      const termExistsInColumn = prev.some(item => item.term === curTerm && item.column === curColumn);
      if (termExistsInColumn) {
        return prev;
      }
      return [
        ...prev,
        {
          term: curTerm,
          column: curColumn,
          color: ""
        }
      ];
    });
  };

  const handleClick = (termToRemove) => {
    setTerms((prev) => (prev.filter((item) => !(item.term === termToRemove.term && item.column === termToRemove.column))));
  };

  const handleSubmit = () => {
    props.setAnswered(true);

    setTerms((prev) => (
      prev.map((stateTerm) => {
        let termsForCheck = termsArray.filter((termFromArray) => termFromArray.term === stateTerm.term);
        if(termsForCheck[0].correctAnswer.includes(stateTerm.column)) {
          return { 
            ...stateTerm,
            color: "green"
          }
        } else {
          return { 
            ...stateTerm,
            color: "red"
          }
        }
      })
    ))
  }

  const indicationStyle = (curTerm) => {
    if(curTerm.color) {
      if(curTerm.color === "green") {
        return {backgroundColor: "#77C688", color: "#3C153B", marginBottom: "2px", cursor: "default"};
      } else if(curTerm.color === "red") {
        return {backgroundColor: "#EB5270", color: "#3C153B", marginBottom: "2px", cursor: "default"};
      } else if (curTerm.color === "missing") {
        return {border: "solid 2px #77C688", borderRadius: "10px", marginBottom: "2px", cursor: "default"};
      }
    }
  }
    
  const returnTermsForColumn = (columnName) => {
    let curTerm = termsArray;
    if(columnName !== "startContainer") {
      curTerm = terms;
      curTerm = curTerm.filter((term) => term.column === columnName);
    }

    if (props.answered) {
      finalColumnsArray.map((column) => (column.column === columnName &&
        column.elements.map((element) => 
          curTerm.filter((term) => term.term === element).length === 0 ? 
            curTerm.push({color: "missing", column: column, term: element}) 
            : null
        )
      ))
    } 
    
    let curTermArray = curTerm.map((term) => {
      return <DragTerm key={term.term} termName={term.term} 
      handleDrop={handleDrop}
      onClick={() => columnName !== "startContainer" ? handleClick(term): null}
      className={classes.term}
      indicationStyle={columnName !== "startContainer" ? indicationStyle(term) : {}}
      answered={props.answered}
      />
    });
    return curTermArray;
  }
    
  const columnNames = columnsArray.map((column) => {
    return <td key={column} className={classes.dropContainerName}>
        {column}
      </td>
  })

  const columnElements = columnsArray.map((column, index) => {
    return <td key={column}>
        <DropContainer title={column} className={classes.dropContainer}>
          {returnTermsForColumn(column)}
        </DropContainer>
      </td>
  })

  return (
    <div className={classes.DragNDrop}>
        <DndProvider backend={HTML5Backend}>
            <table className={classes.table}><tbody>
              <tr> 
                <td className={classes.name}></td>
                {columnNames} 
              </tr>
              <tr> 
                <td className={classes.name}>{props.type}</td>
                {columnElements}
              </tr>
            </tbody></table>

            {!props.answered && <DropContainer title={'startContainer'} className={classes.termsStartContainer}>
              {returnTermsForColumn('startContainer')}
            </DropContainer>}
        </DndProvider>

        {!props.answered && <div onClick={handleSubmit} className={classes.checkBtn} >
          <img src={arrow} alt='v-right' />
          <img src={checkBtn} alt='checkBtn' className={classes.checkBtnText}/>
          <img src={arrow} alt='v-left' className={classes.arrowLeft} />
        </div>}
    </div>
  );
}

export default DragNDrop;