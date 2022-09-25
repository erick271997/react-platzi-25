import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = ()=> {
    alert('aqui estoy yo')
  };
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}
    >
      +
      </button>
  );
}

export { CreateTodoButton };
