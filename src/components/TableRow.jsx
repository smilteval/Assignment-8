import React from 'react';
import TableCell from "./TableCell";

export default function TableRow(props) {

    let {
        numCols,
        color,
        handleClick,
    } = props

    let cols = [];

    for(let i = 0; i < numCols; i++){
        cols.push(
            <TableCell
                color={color}
                handleClick={handleClick}
            />
        )
    }

    return (
        <tr class = "row">
            {cols}
        </tr>
    )
}
