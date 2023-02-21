import React from 'react'

function BoxColor({ r, g, b, }) 
{
    const rgbColor = `rgb(${r} ${g} ${b})`;

    return (
        <div style={ {
            backgroundColor: rgbColor,
            width: 100,
            height: 100 } } >
        </div>
    )
}

export default BoxColor