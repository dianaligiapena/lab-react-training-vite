import React from 'react'

function Random({min, max}) {

    const random = Math.random() * (max - min) + min;

  return (
    <p>
        Random value betweeen {min} and {max} {'=>'} {parseInt(random)}
    </p>
  )
}

export default Random