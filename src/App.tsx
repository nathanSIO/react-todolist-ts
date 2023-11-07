import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoListPage } from './Composant/ToDoListPage';
import { getData } from './Service/LocalStorageService';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { EditToDoForm } from './Composant/EditToDoForm';
import { ToDo } from './Model/Todo';


function App() {

  const [todoList, setTodoList]= useState<ToDo[]>([]);
  const [etat, setEtat] = useState<string>("todo");

    // localStorage.clear();
    // const navigate =useNavigate();

    // const goToForm = () => { 
    //   navigate('/first');  
    // }; 

  function handleClickEtat(){
    let newEtat = "form"
    setEtat(newEtat)
    console.log("Mon Etat : " +  etat)
  }

  if (etat == "todo"){
    return (
      <div style = {{textAlign : "center",}}>
        <h2 >ToDoList</h2>
        <button className="btn btn-outline-success" onClick={() => handleClickEtat()}>New task</button>  
        <ToDoListPage todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat}/>
      </div>
    )
  }
  else  {
    return (
      <EditToDoForm todoList={todoList} setTodoList={setTodoList} etat={etat} setEtat={setEtat}/>
    )
  }
}

export default App;
