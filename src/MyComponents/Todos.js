import React from 'react'
import {TodoItems} from "../MyComponents/TodoItems";

export const Todos = (props) => {
   
    return (
        <div className = "container my-3" >
            <h3 className="text-center">Todos List</h3>
            {props.todos.length===0 ? "No Todos to display" :
            props.todos.map((todo)=>{
                return(
                 <TodoItems todo = {todo} key={todo.Sno} onDelete={props.onDelete} />
                )
            })
        }
        </div>
    )
}
