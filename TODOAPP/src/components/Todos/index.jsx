import React, { useContext } from 'react';
import { TodoContext } from '../ContextTodo';

import ActiveTodo from '../ActiveTodo';


function Todos() {
    const { tasks, deleteTask, toggleTaskDone ,filterTasks,Search,text, setText } = useContext(TodoContext);
    
        return (
        <>
            {tasks.map(task => (
            <ActiveTodo
                id={task.id}
                taskdone={task.done}
                text={task.text}
                key={task.id}
                
            />
            ))}
        </> 
        
        );
    }

export default Todos;