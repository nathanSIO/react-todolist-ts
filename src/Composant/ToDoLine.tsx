import { Dispatch, SetStateAction } from 'react';
import '../App.css';
import { ToDo } from '../Model/Todo';
import { WindowConfirmDeleteToDo } from './WindowConfirmDeleteToDo';
import { saveData } from '../Service/LocalStorageService';

type ToDoLineProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    todo:ToDo,setTodo: Dispatch<SetStateAction<ToDo>>
    etat:string, setEtat: Dispatch<SetStateAction<string>>
    currentTodo:ToDo | undefined,setCurrentTodo: Dispatch<SetStateAction<ToDo|undefined>>
}

export const ToDoLine = ({todoList, setTodoList, etat, setEtat, todo, setTodo, currentTodo, setCurrentTodo}: ToDoLineProps) => {


    function deleteData(todoRm : ToDo){
        const newTodolist = [...todoList!]
        newTodolist.splice(newTodolist.indexOf(todoRm), 1)
        console.log("Ma nouvelle ancienne " + JSON.stringify(todoList))
        setTodoList(newTodolist);
        console.log("Ma nouvelle todolist " + JSON.stringify(todoList))
        saveData(newTodolist);
        WindowConfirmDeleteToDo();
    }

    function handleClickEtat(todoMD: ToDo){
        for(let i=0; i<=todoList.length;i++){
            if (i == todoList.indexOf(todoMD)){
                if(todoMD){
                        setTodo({
                            taskName: todoMD.taskName,
                            deadline: todoMD.deadline,
                            categorie: todoMD.categorie

                        })
                    setCurrentTodo(todoMD)
                }  
            }
        }
        let newEtat = "form";
        setEtat(newEtat);
        return currentTodo
        
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
