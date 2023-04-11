import React from "react";

const Card = (props) => {
  return (
    <div className="todo_card" style={{ transition: "1ms" }}>
      <input
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => {
          props.isCompletedHandler(props.id);
        }}
      />
	  {props.isCompleted? <del>{props.task}</del> : <p>{props.task}</p> }
      
      <svg
        width="22px"
        height="22px"
        viewBox="0 0 1024 1024"
        fill="currentColor"
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.deleteTodo(props.id);
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z"
          fill=""
        />
        <path
          d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
          fill=""
        />
        <path d="M328 340.8l32-31.2 348 348-32 32z" fill="" />
      </svg>
    </div>
  );
};

export default Card;
