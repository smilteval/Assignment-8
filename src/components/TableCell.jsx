import React from 'react'

export default function TableCell(props) {
    
    let{
        handleClick
    } = props;

    return (
        <td 
            class = "cell"
            onClick = {handleClick}    
        ></td>
    )
}
