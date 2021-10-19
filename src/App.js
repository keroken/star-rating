import React from 'react';
import ColorList from './components/ColorList';
import colors from './color-data.json';

function App() {
  return (
    <ColorList colors={colors} />
  );
}

export default App;
