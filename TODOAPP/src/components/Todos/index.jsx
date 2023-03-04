import React, { useContext } from 'react';
import { TodoContext } from '../ContextTodo';

import ActiveTodo from '../ActiveTodo';



function Todos() {
    const { tasks, deleteTask, toggleTaskDone ,filterTasks,Search,text, setText } = useContext(TodoContext);
    
    
    function sortTasksByPriority(tasks) { // fonction pour trier les tâches par priorité
        const priorityOrder = {
            high: 3,
            medium: 2,
            low: 1,
            };
        
            return  Array.from(tasks).sort((a, b) => {
            return priorityOrder[b.priority] - priorityOrder[a.priority];
            });
        }
        
        
  const SortTask = sortTasksByPriority(tasks);
    console.log(tasks)
        return (
        <>
            {SortTask.map(task => (
            <ActiveTodo
                id={task.id}
                taskdone={task.done}
                text={task.text}
                key={task.id}
                priority={task.priority}
                
            />
            ))}
        </> 
        
        );
    }

export default Todos;