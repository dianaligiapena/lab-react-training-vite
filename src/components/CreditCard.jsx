import React from 'react'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.png'

function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  }) {
  return (
    <div style = { {
        backgroundColor: bgColor,
        color: color,
    }}>
        <div className='cardHeader'>
            <img src={type === 'Visa' ? visa : mastercard} alt={type} />
        </div>

        <div className='cardNumber'>
            <p>{number}</p>
        </div>

        <div className='cardFooter'>
            <div>
                <p>Expires {expirationMonth} {expirationYear} {bank}</p>
            </div>

            <div>
                <p> {owner}</p>
            </div>
        </div>
    
    
    </div>
  )
}

export default CreditCard