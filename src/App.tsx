import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayAjout } from './Display/DislpayAjout';
import { DisplayList } from './Display/DisplayList';
import { ToDoListPage } from './Composant/ToDoListPage';


function App() {
  
  // localStorage.clear();
  return (
    
  <div style = {{
    textAlign : "center",
  }}>
    <h2 >ToDoList</h2>
    <ToDoListPage/>
</div>  
)

}

export default App;
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" /> 
