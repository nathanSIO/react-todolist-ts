import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getData } from "../Service/LocalStorageService";
import { ToDo } from "../Model/Todo";
import { ToDoLine } from "./ToDoLine";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { EditToDoForm } from "./EditToDoForm";

type EditToDoFormProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string,setEtat: Dispatch<SetStateAction<string>>
}

export const ToDoListPage = ({todoList, setTodoList}: EditToDoFormProps, {etat, setEtat} :EditToDoFormProps) => {

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
                    <ToDoLine todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat}/>
                </div>
            </div>

        </div> 
    )
}

