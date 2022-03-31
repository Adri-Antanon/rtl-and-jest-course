import { useState } from 'react';

import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const buttonColor = color === 'red' ? 'blue' : 'red';
  const handleClick = (event) => {
    event.preventDefault();
    setColor(buttonColor);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: color, color: 'white' }}
        onClick={handleClick}
        disabled={disabled}
      >
        Change to {buttonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
