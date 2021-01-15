import React from 'react'

export default function Table(props) {

    let {
        numRows,
        numCols,
        color,
    } = props;
    
    return (
        <div>
           <h1>{numRows}</h1> 
        </div>
    )
}
