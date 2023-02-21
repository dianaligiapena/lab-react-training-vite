import React from 'react'

function IdCard({ 
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture,
}) {

    
    const birthday = new Intl.DateTimeFormat('en', { dateStyle: 'long', timeStyle: 'short'} )
        .format(birth)
        .replace(',', ' ');

  return (
    <div>
        <h2>IdCard</h2>

        <div className='idCardImage'>
            <img src={picture} alt={firstName} />
        </div>

        <div className='idCardInfo'>
            <p>Last name: {lastName}</p>
            <p>First name: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birthday}</p>
        </div>

    </div>
  )
}

export default IdCard