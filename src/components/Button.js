import React from 'react';
import { useDispatch } from 'react-redux';
import { appendExpression } from '../slices/expressionSlice';

const Button = ({ label }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const char = e.target.getAttribute('name');
    console.log(char);
    dispatch(appendExpression(char));
  };
  return (
    <button
      className={`bg-gray-300 hover:bg-gray-400 rounded p-2`}
      onClick={handleClick} name={label}
    >
      {label}
    </button>
  );
};

export default Button;
