import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext()

const ContextTodo= (props) => {

     // state pour les tâches

    const getInitialState = () => {
        const storageState = localStorage.getItem('tasks');
        if (storageState) {
            return JSON.parse(storageState);
        } else {
            return {
                tasks: [],
                
            };
        }
        };
        const [tasks, setTasks] = useState(getInitialState);
        useEffect(() => {
            localStorage.setItem('tasks', JSON.stringify(tasks)); // save the tasks state to localstorage
        }, [tasks]);

        useEffect(() => {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];  // get the saved data from localstorage (if any)
            setTasks(savedTasks);
        }, []);
        
        const [search, setSearch] = useState(false);
        
            // Fonction pour ajouter une tâche
            function addTask(task) {
                setTasks([...tasks, task]);
            }

            // Fonction pour supprimer une tâche
            function deleteTask(id) {
                setTasks(tasks.filter(task => task.id !== id));
            }

            // Fonction pour supprimer toutes les tâches
            function deleteAllTasks() {
                setTasks([]);
            }

            // Fonction pour marquer une tâche comme faite
            function toggleTaskDone(id) {
                setTasks(tasks.map(task => {
                if (task.id === id) {
                    return { ...task, done: !task.done };
                } else {
                    return task;
                }
                }));
            }

                // Fonction pour filtrer les tâches en fonction de la recherche
                    function filterTasks(searchTerm) {
                        return tasks.filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()));
                    }
                    const [text, setText] = useState('');

                    
    const ValueTodo ={
        tasks,
    addTask,
    deleteTask,
    deleteAllTasks,
    toggleTaskDone,
    filterTasks,
    search, setSearch,
    text, setText

    }
    return (
        <TodoContext.Provider value={ValueTodo}>
        {props.children}
        </TodoContext.Provider>
    )
    }

export default ContextTodo
