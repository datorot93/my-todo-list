import React, {useState} from 'react'
import { AddTask } from './components/AddTask';

export const MyTodoListApp = () => {

    const [tasks, setTasks] = useState([]);
    const [idTask, setIdTask] = useState(0);

    return (
        <>
            <h1>My ToDo List</h1>
            <AddTask setTasks={setTasks} setIdTask={setIdTask} key={idTask}/>

            <div key={"div_task_container_" + idTask}>                
                    {
                        tasks.map( task => (                            
                            <>
                                <div key={"div_task_" + idTask}>                                    
                                    <input type="checkbox" key={"input_task_" + idTask}  />
                                    <label key={"label_task_" + idTask} value={task}>{task}</label>                            
                                </div>
                            </>                                    
                        ))
                    }                
            </div>
        </>
    )
}
