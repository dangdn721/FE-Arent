import React from 'react';

const Button = (props) => {
  const { className = '', children, onClick = () => { } } = props;
  return (
    <button
      type='button'
      className={`mt-6 px-12 py-3 linear-gradient-1 rounded-md text-white text-lg hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
