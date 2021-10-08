import React from 'react';
import './Login.css';
import useForm from './useForm';


const Login = () => {


    const { handleChange, handleSubmit, values, error } = useForm()

    return (
        <>
            <div className="login__container">
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="title">Login</div>
                    <div className="loginForm__div">
                        <input 
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        placeholder="Username..."
                        />
                        { error.username && <p>{error.username}</p> }
                    </div>
                    <button type="submit" className="login__btn">Login</button>
                </form>
            </div>   
        </>
    )
}

export default Login;
