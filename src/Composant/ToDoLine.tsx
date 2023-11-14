import { Dispatch, SetStateAction, useEffect } from 'react';
import '../App.css';
import { ToDo } from '../Model/Todo';
import { ToDoListPage } from './ToDoListPage';
import { WindowConfirmDeleteToDo } from './WindowConfirmDeleteToDo';
import { deleteLocalStorageData, getData, saveData } from '../Service/LocalStorageService';

type ToDoLineProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    todo:ToDo,setTodo: Dispatch<SetStateAction<ToDo>>
    etat:string, setEtat: Dispatch<SetStateAction<string>>
    currentTodo:ToDo | undefined,setCurrentTodo: Dispatch<SetStateAction<ToDo|undefined>>
}

export const ToDoLine = ({todoList, setTodoList, etat, setEtat, todo, setTodo, currentTodo, setCurrentTodo}: ToDoLineProps) => {


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
        console.log("je suis la " +JSON.stringify(todoMD))
        // console.log(getData().getItem(todoList.indexOf(todoMD)))
        for(let i=0; i<=todoList.length;i++){
            if (i == todoList.indexOf(todoMD)){
                // console.log("je suis la " + JSON.stringify(todoMD))
                if(todoMD){
                    // console.log("currentTodo avant" + JSON.stringify(todo))
                    // useEffect(() => {
                        setTodo({
                            taskName: todoMD.taskName,
                            deadline: todoMD.deadline,
                            categorie: todoMD.categorie

                        })
                        console.log("currentTodo après" + currentTodo)
                    // }, [])
                    setCurrentTodo(todoMD)
                }  
            }
        }
        let newEtat = "form";
        setEtat(newEtat);
        return currentTodo
        
    }

    // function changeSetTodo(){
    //     setCurrentTodo({
    //         taskName: taskName,
    //         deadline: deadline,
    //         categorie: categorie

    //     })
    // }


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
                                <div className='card-text' defaultValue={todo.categorie.label!}>{todo.categorie.label}</div>
                                <div className="card-text">{todo.deadline} </div>
                                <br></br>
                                <button className='btn btn-light' onClick={() => setCurrentTodo(handleClickEtat(todo))}>Modifier </button>
                                <a> </a>
                                <button className="btn btn-danger" key={todo.taskName+todo.deadline} onClick={() => deleteData(todo)}> Delete </button><br/>
                            </div>
                        </article> 
                    ))}
        </div>
        
    );
}
