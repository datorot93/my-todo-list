import React, {useState} from 'react'
import { AddTask } from './components/AddTask';
export const MyTodoListApp = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <>
            <h1>My ToDo List</h1>
            <AddTask setTasks={setTasks}/>

            <div>
                <ul>
                    {
                        tasks.map( task => (
                            <li key={task}>{task}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
