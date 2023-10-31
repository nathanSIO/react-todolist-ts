import { useState } from "react";
import { ToDo } from "../Model/Todo";

export const ListToDos = (todoList: any[]) => {
    // const [todoList, setTodoList]= useState<ToDo[]>([]);
    // console.log("je suis la " + console.log(":::::" + JSON.stringify(todoList)))
    
    return (
        <div style={{
            textAlign : "center",
        }}>
            {todoList.map((todo)=> (

                <li>{todo.taskName} <a> On est la </a> {todo.deadline}</li>
            ))}
        </div>
        
    );
}