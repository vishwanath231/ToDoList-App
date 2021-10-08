import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Todos = ({ todo, index, completed, removeTodos }) => {
    return (
        <>
            <div key={index} className="body">
                <p style={{textDecoration : todo.isCompleted ? "line-through": "none"}} >{todo.text}</p>
                <div className="action">
                    <button onClick={() => completed(index)} className="done__btn">
                        <FontAwesomeIcon icon={faCheck} className="done" /> 
                    </button>
                    <button onClick={() => removeTodos(index)} className="cancel__btn">
                        <FontAwesomeIcon icon={faTimes} className="cancel" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todos;
