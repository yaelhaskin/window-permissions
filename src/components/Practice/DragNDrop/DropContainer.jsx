import React from 'react';
import classes from "./DragNDrop.module.scss";
import { useDrop } from "react-dnd";

import { ItemTypes } from './ItemType'

const DropContainer = ({children, className, title}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.TERM,
        drop: () => ({name: title}),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), )

    return (
        <div ref={drop} className={[`${className} ${isOver && title !== 'startContainer' ? classes.isOver : null}`]}>
            {children}
        </div>
    )
}

export default DropContainer;
