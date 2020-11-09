// write your custom hook here to control your checkout form
import React, { useState } from React;

export const useForm = initialValue =>{
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return[values, handleChanges];
}