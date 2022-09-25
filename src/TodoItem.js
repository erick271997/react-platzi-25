import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () =>{
    alert('aqui completamos' + props.text)
  };
  const onDelet = () =>{
    alert('Borraste el texto' + props.text)
  };
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelet}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
