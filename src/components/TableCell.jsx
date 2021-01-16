import React from 'react'

export default function TableCell(props) {
    
    let{
        handleClick
    } = props;

    return (
        <td 
            className = "cell"
            onClick = {handleClick}    
        ></td>
    )
}
