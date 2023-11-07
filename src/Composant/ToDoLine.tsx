import { Dispatch, SetStateAction, useEffect } from 'react';
import '../App.css';
import { ToDo } from '../Model/Todo';
import { ToDoListPage } from './ToDoListPage';
import { WindowConfirmDeleteToDo } from './WindowConfirmDeleteToDo';
import { deleteLocalStorageData, saveData } from '../Service/LocalStorageService';

type ToDoLineProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string, setEtat: Dispatch<SetStateAction<string>>
}

export const ToDoLine = ({todoList, setTodoList}: ToDoLineProps,  {etat, setEtat} : ToDoLineProps) => {


    function deleteData(todoRm : ToDo){
        const newTodolist = [...todoList!]
        // console.log(newTodolist)
        newTodolist.splice(newTodolist.indexOf(todoRm), 1)
        // deleteLocalStorageData(todoRm);
        console.log("Ma nouvelle ancienne " + JSON.stringify(todoList))
        setTodoList(newTodolist);
        console.log("Ma nouvelle todolist " + JSON.stringify(todoList))
        saveData(newTodolist);
        WindowConfirmDeleteToDo();
    }

    function handleClickEtat(todoMD: ToDo){
        console.log("je suis la " + JSON.stringify(todoList.indexOf(todoMD)))
        // let newEtat = "form";
        // setEtat(newEtat);
        // console.log(etat)
    }


    return (
        <div style={{
            textAlign : "center",
        }}>
                    {todoList.map((todo)=> (
                        <article className={todo.categorie.couleur!}>
                            <div>
                                <header>
                                    <h5 className="card-title">{todo.taskName}</h5>
                                </header>
                                <hr/>
                                <div className='card-text'>{todo.categorie.id}</div>
                                <div className="card-text">{todo.deadline} jours </div>
                                <br></br>
                                <button className='btn btn-light' onClick={() => handleClickEtat(todo)}>Modifier </button>
                                <a> </a>
                                <button className="btn btn-danger" key={todo.taskName+todo.deadline} onClick={() => deleteData(todo)}> Delete </button><br/>
                            </div>
                        </article> 
                    ))}
        </div>
        
    );
}