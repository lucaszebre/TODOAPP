import React, { useState,  useContext} from 'react';
import { TodoContext} from '../ContextTodo';
import './Nav.css'
const Nav = () => {

const { addTask , filterTasks ,text, setText,search, setSearch, } = useContext(TodoContext);
const [searchTerm, setSearchTerm] = useState('');


function handleSearch(text) {
    setText(text);
    setSearchTerm(text);
    filterTasks(searchTerm);
    setSearch(true);
}
    function handleSubmit(text) {
    
        if (text) {
        addTask({ id: Date.now(), text, done: false });
        setText('');
        }
    }
    return (
        <>
        <div className="NavContainer">
            <div className='NavWrapper'>
                <div className="NavBlock1">
                    <h1>TODO</h1> <img className='NavMoon' src="/TODOAPP/images/icon-moon.svg" alt="moon" />
                </div>
            
                <form className="NavBlock2">
                    <input className='Bar' value={text} onChange={(e)=> handleSearch(e.target.value)} placeholder='create a new todo' type="text" maxLength={50} />
                    <div className="option-nav">
                        <button onClick={()=> handleSubmit(text)} className='add'>ADD</button>
                        {/* <button onClick={()=> handleSearch(text)}  className='search'>SEARCH</button> */}
                    </div>
                </form>
                
            </div>
        </div>
        </>
    )
}

export default Nav
