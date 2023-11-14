import { Dispatch, SetStateAction, useEffect } from "react";
import { getData } from "../Service/LocalStorageService";
import { ToDo } from "../Model/Todo";
import { ToDoLine } from "./ToDoLine";

type EditToDoFormProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string,setEtat: Dispatch<SetStateAction<string>>
    todo:ToDo,setTodo: Dispatch<SetStateAction<ToDo>>
    currentTodo:ToDo | undefined,setCurrentTodo: Dispatch<SetStateAction<ToDo|undefined>>
}

export const ToDoListPage = ({todoList, setTodoList, etat, setEtat, todo, setTodo, currentTodo, setCurrentTodo}: EditToDoFormProps) => {

    useEffect(() => {
        getMyToDoList();
      }, [])

    function getMyToDoList(){
        setTodoList(
            getData()!
        );
    }
    
    return (<div>
            <div >    
                <div className="cards">
                    <ToDoLine todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat} todo={todo} setTodo={setTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}/>
                </div>
            </div>

        </div> 
    )
}

