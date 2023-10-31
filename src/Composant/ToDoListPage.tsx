import { ChangeEvent, useState } from "react";
import { saveData } from "../Service/LocalStrorageService";
import { ToDo } from "../Model/Todo";
import { ListToDos } from "./ListTodos";

export const ToDoListPage = () => {

    const [taskValue, setTaskValue]=useState<string>("");
    const [deadLine, setDeadLine]=useState<string>("0");
    // const [todoList, setTodoList]= useState<[]>([]);
    const [todoList, setTodoList]= useState<ToDo[]>([]);


    interface Todo {
        text: string;
        id: number;
        completed: boolean;
    }

    function handleChange(event:ChangeEvent<HTMLInputElement>){
        // console.log("je suis rentré")
        if(event.target.name=='task'){
            setTaskValue(event.target.value);
        }
        else if (event.target.name=='deadline'){
            setDeadLine(event.target.value);
        }
        console.log(taskValue + " " + deadLine);
         
    } 
    
    function changeSetTodoList(){
        setTodoList([
            ...todoList,
            {
                taskName: taskValue,
                deadline: deadLine
            }
        ]);
        console.log(" je suis la " );
    }

    return (<div>
        <div style={{
            textAlign : "center",
        }}>
            <input type="text" name="task" placeholder="Entré votre tache"  value={taskValue} onChange={handleChange}></input>
            <a> </a>
            <input type="number" name="deadline" onChange={handleChange} placeholder="0" style={{
                width : '50px'
            }}></input>
            <button  type="submit" onClick={(() => (() => saveData(taskValue, deadLine)) && (changeSetTodoList())) } className="btn btn-outline-dark"> Add</button>
        </div>
        {ListToDos(todoList)}
    </div> 
    )
}