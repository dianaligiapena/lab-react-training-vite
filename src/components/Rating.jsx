import React from 'react'

function Rating( { children } ) {
    let rounded = Math.round( children );
    let stars = '';
    for (let i = 0; i < rounded; i++) {
        stars += "★"; 
    }
    for (let i = rounded; i < 5; i++) {
        stars += "☆";
    }

  return (
    <div>
        <p>{stars}</p>
    </div>
  )
}

export default Rating