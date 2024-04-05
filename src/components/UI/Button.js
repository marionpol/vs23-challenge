import React from 'react';

const Button = ({ className, type, onClick, disabled, children }) => {
  return (
    <button className={className} type={type || 'button'} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
