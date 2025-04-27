import React, { useState } from 'react';

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020
  });

  const changeColor = () => {
    console.log("Button clicked");
    setPhone((prevState) => ({
      ...prevState,
      color: prevState.color !== 'blue' ? 'blue' : 'black',
    }));
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Phone Information</h2>
      <p><strong>Brand:</strong> {phone.brand}</p>
      <p><strong>Model:</strong> {phone.model}</p>
      <p><strong>Color:</strong> {phone.color}</p>
      <p><strong>Year:</strong> {phone.year}</p>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;

