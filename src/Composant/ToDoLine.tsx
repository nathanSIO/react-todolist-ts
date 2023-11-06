import { Dispatch, SetStateAction, useEffect } from 'react';
import '../App.css';
import { ToDo } from '../Model/Todo';
import { ToDoListPage } from './ToDoListPage';
import { WindowConfirmDeleteToDo } from './WindowConfirmDeleteToDo';
import { deleteLocalStorageData, saveData } from '../Service/LocalStorageService';

type ToDoLineProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
}

export const ToDoLine = ({todoList, setTodoList}: ToDoLineProps) => {


    function deleteData(todoRm : ToDo){
        const newTodolist = [...todoList!]
        // console.log(newTodolist)
        newTodolist.splice(newTodolist.indexOf(todoRm), 1)
        // deleteLocalStorageData(todoRm);
        console.log("Ma nouvelle ancienne " + JSON.stringify(todoList))
        setTodoList(newTodolist);
        console.log("Ma nouvelle todolist " + JSON.stringify(todoList))
        saveData({["todoList"] : newTodolist, setTodoList});
        WindowConfirmDeleteToDo();
    }


    return (
        <div style={{
            textAlign : "center",
        }}>
           
            {/* <table> */}
                {/* <tbody> */}
                    {todoList.map((todo)=> (
                    // <div className="cards">
                        <article className={todo.categorie.couleur!}>
                            <div>
                                <header>
                                    <h5 className="card-title">{todo.taskName}</h5>
                                </header>
                                <hr/>
                                <div className='card-text'>{todo.categorie.id}</div>
                                <div className="card-text">{todo.deadline} jours </div>
                                <button className="btn btn-danger" key={todo.taskName+todo.deadline} onClick={() => deleteData(todo)}> Delete </button><br/>
                            </div>
                        </article>
                    // </div>

                        // <tr>
                        //     <td>{todo.taskName}</td>
                        //     <td>{todo.deadline}</td>
                        // </tr>  
                    ))}
                {/* </tbody> */}
            {/* </table> */}
        </div>
        
    );
}