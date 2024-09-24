import React, { useState } from 'react';

function AddNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
    calculateResult(e.target.value, num2);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
    calculateResult(num1, e.target.value);
  };

  const calculateResult = (val1, val2) => {
    const sum = parseFloat(val1 || 0) + parseFloat(val2 || 0);
    setResult(sum);
  };

  return (
    <>
    <div>
      <h2>Addition of Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={handleNum2Change}
      />
      
      {result !== '' && <p>Result: {result}</p>}
      <h1>{num1}</h1>
      <h1>{num2}</h1>
    </div>
    </>
  );
}

export default AddNumbers;
