import React, { useState,  useContext} from 'react';
import { TodoContext} from '../ContextTodo';
import './Nav.css'
const Nav = () => {

const { addTask , filterTasks ,text, setText,search, setSearch,priority, setPriority } = useContext(TodoContext);
const [searchTerm, setSearchTerm] = useState(''); // pour la recherche


function handleSearch(text) { // fonction pour la recherche
    setText(text);
    setSearchTerm(text);
    filterTasks(searchTerm);
    setSearch(true);
}
    function handleSubmit(text) { // fonction pour ajouter une tâche
        if (text) {
        addTask({ id: Date.now(), text, done: false , priority : priority});
        setPriority('low');
        setText('');
        setSearch(false);
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
                    <label className='NavPriority'>
                       
                        <select className='NavSelect' value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option className='NavOption' value="low">Low</option>
                            <option className='NavOption' value="medium">Medium</option>
                            <option className='NavOption' value="high">High</option>
                        </select>
                        </label>
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
