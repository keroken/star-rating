import React, { useState } from 'react';
import ColorList from './components/ColorList';
import colorData from './color-data.json';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}

export default App;
