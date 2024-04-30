// Child.js
import React, { useEffect } from 'react';

function Child({ count }) {
  useEffect(() => {
    console.log('Child rerendered');
  });

  return <div>Count: {count}</div>;
}

export default Child;
