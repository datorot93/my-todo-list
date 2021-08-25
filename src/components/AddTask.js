import React, { useState } from 'react'

export const AddTask = ({setTasks}) => {

    const [inputValue, setInputValue] = useState('');

    // Control the input change (when someone writes something)
    const handleInputChamge = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setTasks(tasks => [...tasks, inputValue])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChamge}
            />
        </form>
    )
}
