import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoListPage } from './Composant/ToDoListPage';
import { getData } from './Service/LocalStorageService';


function App() {
    // localStorage.clear();
  return (
    <div style = {{textAlign : "center",}}>
      <h2 >ToDoList</h2>
      <ToDoListPage/>
    </div>
  )

}

export default App;
