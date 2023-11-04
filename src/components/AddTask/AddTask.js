import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "../TodoList/TodoList";


function AddTask({todo, setTodo}){
    const [value, setValue] = useState('')
    const saveTodo = ()=>{
        if(value){
            setTodo(
                [...todo, {
                id: uuidv4(),
                title: value,
                status: false
            }])
            setValue('')
            
        }

    }

    return(
        <div className="inputField">
            <input placeholder="Добавьте задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className="addBtn" onClick={saveTodo}>+</button>
        </div>
    )
}
export default AddTask;
