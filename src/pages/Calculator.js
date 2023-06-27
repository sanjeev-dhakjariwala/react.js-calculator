import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appendExpression, cls, calc } from '../slices/expressionSlice';
import Button from '../components/Button';

const Calculator = () => {
  const result = useSelector((state) => state.expression);
  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   dispatch(appendExpression(e.target.name));
  // };

  const clear = () => {
    dispatch(cls());
  };

  const calculate = () => {
    try {
      dispatch(calc());
    } catch (error) {
      dispatch(calc());
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <input
          type="text"
          className="w-full mb-4 p-2 rounded"
          value={result}
          readOnly
        />

        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-gray-300 hover:bg-gray-400 rounded p-2"
            onClick={clear}
          >
            Clear
          </button>
          <button
            className="col-span-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded p-2"
            onClick={calculate}
          >
            =
          </button>
          <Button label="+" />
          <Button label="-" />
          <Button label="*" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="0" className="col-span-2" />
          <Button label="." />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
