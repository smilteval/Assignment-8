import React from 'react'
import TableRow from './TableRow';

export default function Table(props) {

    let {
        numRows,
        numCols,
        color,
    } = props;

    let rows = [];

    for(let i = 0; i < numRows; i++){
        rows.push(
            <TableRow 
                numCols={numCols}
                color={color}
            />
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
