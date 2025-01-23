import React from "react";

function Car(props) {
  //  const {brand, color} = props;

  const { carInfo } = props;

  const { brand, color } = carInfo;

  //   const brand = "tata";
  //   const text = `Hai, i am a  ${color} ${brand} car my price is ${price}`;

  return (
    <div>
      <h1>{`hi i am a ${color} ${brand} car`}</h1>
    </div>
  );
}

export default Car;
