import React from 'react'

function Greetings({lang, children}) {

  return (
    <h4>
    { lang  === 'en'? 'Hello' : 
    lang === 'de'? 'Hallo' : 
    lang === 'fr'? 'Bonjour' : 'Hello'} 

    {children}

    </h4>
  )
}

export default Greetings