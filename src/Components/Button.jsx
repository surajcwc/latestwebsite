import React from 'react';
import '../Styles/Button.css';  // Ensure correct path and casing

function Button({text}) {
  return (
    <button className="btn-primary">
      {text}
      
    </button>
  );
}

export default Button;
