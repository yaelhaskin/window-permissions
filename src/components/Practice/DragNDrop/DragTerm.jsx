import React, { useEffect } from 'react';
import classes from "./DragNDrop.module.scss";
import { useDrag } from "react-dnd";

import { ItemTypes } from './ItemType'

const DragTerm = (props) => {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.TERM ,
        canDrag: !props.answered,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult){
                props.handleDrop(props.termName, `${dropResult.name}`);
            } 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} 
            style={props.indicationStyle}
            className={[`${props.className} ${classes.variable}`]} 
            onClick={props.onClick}
        >
            { props.termName }
        </div>
    )
}

export default DragTerm;