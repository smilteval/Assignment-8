import React from 'react';
import TableCell from "./TableCell";

export default function TableRow(props) {

    let {
        numCols,
        color
    } = props

    let cols = [];

    for(let i = 0; i < numCols; i++){
        cols.push(
            <TableCell/>
        )
    }

    return (
        <tr>
            {cols}
        </tr>
    )
}
