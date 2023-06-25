import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appendExpression, cls, calc } from '../slices/expressionSlice';
const Calculator = () => {
  const result = useSelector((state) => state.expression);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(appendExpression(e.target.name));
  };

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
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="col-span-2 bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded p-2"
            name="."
            onClick={handleClick}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
