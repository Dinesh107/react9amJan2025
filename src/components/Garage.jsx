import React from "react";
import Car from "./Car";

function Garage() {
  // const brand = "maruthi";
  // const color = "Red";

  // const carInfo = {
  //   brand: "maruthi",
  //   color: "Red",
  //   year: 2020,
  //   mileage: 100000,
  //   price: 10000000,
  // };

  // const carInfo = {
  //       brand: "maruthi",
  //       color: "Red",
  // };

  // const isDoorOpened = false;

  const carInfo = {
  
   };

  const carList = [
    { brand: "maruthi", color: "red"},
    { brand: "tata", color: "blue"},
    { brand: "ford", color: "black"},
  ]

  const numList = [
    1,2,3,4,5,6,7,8,9,10
  ]

  const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;

  return (
    <>
      <h1>Garage</h1>
      {/* <Car brand = {brand} color = { color } /> */}

      {/* <Car color = { 'red' } brand = { 'tata' }/> */}

      {/* <Car color = 'red'  brand =  'tata' /> */}

      {/* { showCarInfo ?<Car carInfo={carInfo} /> : null } */}

      {/* { showCarInfo && <Car carInfo={carInfo} />  }

      {isDoorOpened ? <h2>Garage door is opned</h2> : <h2>Garage door is closed</h2>  } */}
  
     <ul>
       { carList.map((carInfo) =>  <li key={carInfo.brand} > <Car carInfo={carInfo} /></li> )} 
     </ul>
     <ul>
       { numList.map((e, index) =>  <p key={index} >{e}</p> )} 
     </ul>

    </>
  );
}

export default Garage;
