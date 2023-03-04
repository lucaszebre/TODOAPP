import React from 'react'
import { useContext } from 'react';
import './Center.css'
import Todos from '../Todos'
import Search from '../Search'

import { TodoContext } from '../ContextTodo';
const Center = () => {
    const { tasks, deleteAllTasks, search, setSearch} = useContext(TodoContext);
    return (
        
        <div className="CenterContainer">
            <div className="CenterWrapper">
        
            {!search&&   <Todos />}
            {search && <Search />}
                
                
                </div>
            <div 
            className="CenterBottom">
                
                    <p onClick={
                () => deleteAllTasks() } className='supp'>Supprimer tout</p> <p onClick={()=> setSearch(true)} className='search'>Rechercher</p>
                
                
            </div>
        </div>
    )
}

export default Center
