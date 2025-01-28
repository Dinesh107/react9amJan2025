import React, { useState } from 'react'

function Bike() {

//    const [color, setColor] = useState("Red");
//    const [brand, setBrand] = useState("Honda");
//    const [model, setModel] = useState("Activa 5g");
//    const [year, setYear] = useState("2020");

    const [bike, setBike] = useState({
        color: "Red",
        brand: "Honda",
        model: "Activa 5g",
        year: "2020"
    })


    function updateColor() {
        setBike(previousState => {
            return {...previousState, color: "purple"};
        })
    }

    console.log('current state', bike);
    

  return (
    <>
        <h1>My Bike</h1>
        <p>Color: {bike.color}</p>
        <p>Brand: {bike.brand}</p>
        <p>Model: {bike.model}</p>
        <p>Year: {bike.year}</p>
        <button onClick={updateColor} >change color</button>

    </>
  )
}

export default Bike