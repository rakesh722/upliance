import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Animate background color based on counter
  const props = useSpring({
    backgroundColor: `rgba(${count * 5}, ${255 - count * 5}, ${255 - count * 2}, 1)`,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <animated.div style={{ ...props, width: '100%', height: '100vh' }}>
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
          <h1>Counter: {count}</h1>
          <Button onClick={() => setCount(count + 1)} variant="contained">Increment</Button>
          <Button onClick={() => setCount(count - 1)} variant="contained" sx={{ marginLeft: '10px' }}>Decrement</Button>
          <Button onClick={() => setCount(0)} variant="contained" sx={{ marginLeft: '10px' }}>Reset</Button>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Counter;
