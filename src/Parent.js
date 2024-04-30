// Parent.js
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <Child count={count} />
    </div>
  );
}

export default Parent;
