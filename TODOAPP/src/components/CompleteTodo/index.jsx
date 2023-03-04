import React from 'react'
import './CompleteTodo.css'

const CompleteTodo = (props) => {
    return (
        <div className='CompleteTodoContainer'>
            <div className="Complete">
                <img src="/images/icon-check.svg" alt="" />
                </div> 
                <p className='texttodo'>{props.text}</p>
        </div>
    )
}

export default CompleteTodo
