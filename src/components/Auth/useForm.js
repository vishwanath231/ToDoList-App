import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = () => {

    const [values, setValues] = useState({
        username: ''
    })
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    

    // Handle changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }
    

    // Validate
    let errors = {};
    if (!values.username) {
        errors.username = "Username required."
    }

    const history = useHistory();

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(errors)

        if (Object.keys(error).length === 0 && isSubmitting) {
            localStorage.setItem("reactUser", values.username)
            history.push('/Home');
        }
    }


    return { handleChange, handleSubmit, values, error }; 
}

export default useForm;
