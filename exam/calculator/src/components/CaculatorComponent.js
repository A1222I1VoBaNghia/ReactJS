import React, { useState } from 'react';

function Calulator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      setResult('Lỗi');
    } else {
      setResult(num1 + num2); 
    }
  };
  const sub = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      setResult('Lỗi');
    } else {
      setResult(num1 - num2); 
    }
  };
  const mul = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      setResult('Lỗi');
    } else {
      setResult(num1 * num2); 
    }
  };
  const div = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      setResult('Lỗi');
    } else {
      setResult(num1 / num2); 
    }
  };

return (
    <div className="calculator">
      <div>
        <input
          type="text"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>x</button>
        <button onClick={div}>/</button>
        </div>
    </div>
  );
}

export default Calulator;
