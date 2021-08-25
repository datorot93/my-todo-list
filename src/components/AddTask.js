import React, { useState } from 'react'

export const AddTask = ({setTasks, setIdTask}) => {

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

            setIdTask(idTask => idTask + 1);
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
