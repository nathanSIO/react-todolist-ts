import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayAjout } from './Display/DislpayAjout';
import { DisplayList } from './Display/DisplayList';
import { ListToDos, getList } from './Composant/ListTodos';


function App() {
  
  // localStorage.clear();
  return (
    
  <div style = {{
    textAlign : "center",
  }}>
     <h2 >ToDoList</h2>
    <DisplayAjout/>
    {/* <DisplayList/> */}
    {getList()}
</div>  
)


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" /> 
