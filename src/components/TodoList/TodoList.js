import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faLock, faLockOpen, faSave} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function TodoList({todo, setTodo}){
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(()=>{
        setFiltered(todo)
    },[todo])

    const deleteTodo =(id) =>{
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }
    const statusTodo = (id) =>{
        let newTodo = [...todo].filter(item =>{
            if(item.id === id ){
                item.status = !item.status
            }
            return item  
        })
        setTodo(newTodo)
    }
    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }
    const saveTodo = (id) => {
        let newTodo = [...todo].map(item =>{
            if(item.id === id){
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)

    }
    const filterTasks = (status) =>{
        if(status === 'all'){
            setFiltered(todo)
        }else{
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }

    }
    return (
        <div className="todoList">
             <div aria-label="Basic example" className="filterButtons">
                <Button className="filterButton" variant="secondary" onClick={()=>filterTasks('all')}>All</Button>
                <Button className="filterButton" variant="secondary" onClick={()=>filterTasks(true)}>Closed</Button>
                <Button className="filterButton" variant="secondary" onClick={()=>filterTasks(false)}>Open</Button>
            </div>
            {filtered.map(item =>(
                <div key={item.id} className="wrap" >
                    {
                        edit === item.id ?
                            <div>
                                <input className="inputOnChange" value={value} onChange={(e)=> setValue(e.target.value)}/>
                            </div> :
                            <div className={!item.status ? '' : 'close'}>{item.title}</div>
                    
                    }
                    {
                        edit === item.id ?
                            <div>       
                                <button className="editButtons" onClick={()=> saveTodo(item.id) }><FontAwesomeIcon icon={faSave}/></button>
                            </div> :
                            <div className="buttons">
                                <button className="editButtons" onClick={()=> deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                <button className="editButtons" onClick={()=> editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit} /></button>
                                <button className="editButtons" onClick={()=> statusTodo(item.id)}>
                                    {
                                        item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />
                                    }
                                    
                                </button>
                            </div>
                    }
                </div>
            ))}
        </div>
    )

}
export default TodoList;