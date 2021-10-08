import React, { useState} from 'react';
import './Home.css';

import Header from './components/Header';
import Todos from './components/Todos';
import Form from './components/Form';
import NoTodos from './components/NoTodos';

const Home = () => {



    const [value, setValue] = useState('');


    const [todos, setTodos] = useState([
        // {
        //     text: "Hii...",
        //     isCompleted: false
        // }
    ])
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) return;

        setTodos([
            ...todos,
            { text: value}
        ])

        setValue("");

    }
    
    const handle = () => {
        
        if (!value) return;

        setTodos([
            ...todos,
            { text: value}
        ])
        
        setValue("");
    }

    
    const completed = (index) => {

        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
        
    }
    
    const removeTodos = (index) => {
        
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)
        
    }



       

    return (
        <>
            <div className="container">
                <div className="box">

                    {/* header */}
                    <Header />

                    {/* form */}
                    <Form handleSubmit={handleSubmit} value={value} setValue={setValue} handle={handle} />



                    {/* body */}
                    <div className="body__container">
                        {
                            todos.length !== 0 ? (
                                <>
                                    { todos.map((todo, index) => (
                                        <Todos todo={todo} index={index} removeTodos={removeTodos} completed={completed} />
                                    ))}
                                </>
                            ) : (
                                <NoTodos />
                            )
                        }
                    </div>

                </div>
            </div>    
        </>
    )
}

export default Home;