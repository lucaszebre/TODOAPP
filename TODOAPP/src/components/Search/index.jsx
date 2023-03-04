import React, { useContext } from 'react';
import { TodoContext } from '../ContextTodo';

import ActiveTodo from '../ActiveTodo';


function Search() {
    const { tasks, deleteTask, toggleTaskDone ,filterTasks,Search,text, setText } = useContext(TodoContext);
    
        return (
        <>
            {filterTasks(text).map(task => (
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

export default Search;