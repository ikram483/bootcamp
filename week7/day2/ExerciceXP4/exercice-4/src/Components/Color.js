import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
    setFavoriteColor('yellow');
  }, []); 
  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        My Favorite Color is <em>{favoriteColor}</em>
      </h1>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;
