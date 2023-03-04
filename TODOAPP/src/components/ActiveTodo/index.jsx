import React, { useContext } from 'react'
import './ActiveTodo.css'
import { TodoContext } from '../ContextTodo';
const ActiveTodo = (props) => {
    const {task,  deleteTask, toggleTaskDone } = useContext(TodoContext);
    function Onchange() {
        
        toggleTaskDone(props.id)

        setTimeout(() => {
            deleteTask(props.id)
        }
        , 1000);
    }

    
    return (
    <div className="ActiveTodoContainer">
        <input className='checktodo'   checked={props.taskdone 
        } onChange={() => Onchange()}
        type="checkbox" /> <p className='TextTodoActive'>{props.text} - {props.priority}</p>
    </div>
    )
}

export default ActiveTodo
