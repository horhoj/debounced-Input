import React, {useState} from 'react';
import './App.css';
import DebouncedInput from "./DebouncedInput";

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="mb-5">value: {value}</div>
      <DebouncedInput
        onChange={setValue}
        value={value}
      />
      <div>
        <button
          className="btn btn-primary mt-5"
          onClick={() => setValue(Math.random().toString())}
        >
          Изменить пропс
        </button>
      </div>
    </div>
  );
}

export default App;
