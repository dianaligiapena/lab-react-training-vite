import React from 'react'

function DriverCard( { 
    name,
    rating, 
    img,
    car
} ) {


  return (
    <div className='driver'>
        <div>
            <img src={img} alt={name} />
        </div>

        <div className='driverInfo'>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{car.model} - {car.licensePlate}</p>
        </div>

    </div>
  )
}

export default DriverCard