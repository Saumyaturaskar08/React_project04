// import React, { useState } from 'react'

// function  Card () {
//   const [count, setcount] = useState(0);
//     return (
//     <>
//     <p>Custom button {count} time</p>
//     <button type="button" class="btn btn-danger" onClick={() => setcount(count +1)}>Increment </button>
//     <button type="button" class="btn btn-warning" onClick={() => setcount(count -1)}>Decrement</button>
//     <button type="button" class="btn btn-dark"  onClick={() => setcount(0)} >Reset</button>
   
// </>
//   )
// }
// export default Card;

import React, { useState } from 'react';

function Example() {
  const [bgColor, setBgColor] = useState('blue');

  return (
    <div>
      <div style={{ backgroundColor: bgColor }}>
        Hello World
      </div>
      <button onClick={() => setBgColor('lightblue')}>
        Change color
      </button>
    </div>
  );
}
export default Example;