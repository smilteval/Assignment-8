import React from 'react'
import TableRow from './TableRow';

export default function Table(props) {

    let {
        numRows,
        numCols,
        color,
        handleClick,
    } = props;

    let rows = [];

    for(let i = 0; i < numRows; i++){
        rows.push(
            <TableRow 
                numCols={numCols}
                color={color}
                handleClick={handleClick}
            />
        )
    }

    return (
        <div>
            <table id = "table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
