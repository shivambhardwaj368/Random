import React, { useState } from 'react';

function State3() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h2 style={{ color: color }}>My favourite color is {color}</h2>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

export default State3;