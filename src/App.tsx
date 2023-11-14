import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoListPage } from './Composant/ToDoListPage';
import { getData } from './Service/LocalStorageService';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { EditToDoForm } from './Composant/EditToDoForm';
import { ToDo } from './Model/Todo';
import { Base } from './Composant/Base';


function App() {

  const [todoList, setTodoList]= useState<ToDo[]>([]);
  const [etat, setEtat] = useState<string>("todo");
  const [todo, setTodo] = useState<ToDo>({taskName:"",deadline:"",categorie: {id:"",label:"", couleur:"card text-white bg-info mb-3"}});
  const [currentTodo, setCurrentTodo] = useState<ToDo>(); 

  function handleClickEtat(){
    let newTodo: ToDo;
    newTodo = {taskName: "", deadline:"", categorie:{id:"", label:"", couleur:"card text-white bg-info mb-3"}}
    setTodo(newTodo)
    let newEtat = "form"
    setEtat(newEtat)
  }
  
  if (etat == "todo"){
    return (
      <div style = {{textAlign : "center",}}>
        <></>
        <Base/>
        <button className="btn btn-outline-success" onClick={() => handleClickEtat()}>New task</button>  
        <ToDoListPage todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat} todo={todo} setTodo={setTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}/>
      </div>
    )
  }
  else  {
    return (
      <div style = {{textAlign : "center",}}>
        <Base/>
        <EditToDoForm todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat} todo={todo} setTodo={setTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}/>
      </div>
    )
  }
}

export default App;
