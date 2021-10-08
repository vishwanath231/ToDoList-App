import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const Form = ({ handleSubmit, value, setValue, handle }) => {
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="text"
                    id="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={e => e.key === "Enter" && handle()}
                    placeholder="Add a todo"
                />
                <button type="submit" className="add__btn" onClick={handle}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form> 
        </>
    )
}

export default Form;
