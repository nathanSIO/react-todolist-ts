import React, { ChangeEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { saveData, getData } from "../Service/LocalStorageService";
import { ToDo } from "../Model/Todo";
import { ListToDos } from "./ListTodos";
import { ToDoLine } from "./ToDoLine";
import { Category } from "../Model/Category";
import { idText } from "typescript";

export const ToDoListPage = () => {

    const [taskValue, setTaskValue]=useState<string>("");
    const [deadLine, setDeadLine]=useState<string>("0");
    const [categorie, setCategorie]=useState<Category>({id:"",label:"", couleur:"card text-white bg-danger mb-3"});
    const [todo, setTodo] = useState<ToDo>({taskName:taskValue,deadline:deadLine,categorie: categorie});
    const [todoList, setTodoList]= useState<ToDo[]>([]);

    useEffect(() => {
        getMyToDoList();
      }, [])

    function getMyToDoList(){
        setTodoList(
            getData()!
        );
    }

    const handleChange = (event : React.ChangeEvent<any>)=> {
        // console.log("je suis rentré")
        if(event.target.name=='task'){
            setTaskValue(event.target.value);
        }
        else if (event.target.name=='deadline'){
            setDeadLine(event.target.value);
        }
        else if (event.target.name=="divCateg"){
            setCategorie(event.target.value);
            colorCateg({id:event.target.selectedIndex, label:event.target.value, couleur:null})
        }
         
    } 

    function changeSetToDo(taskValue: string, deadLine: string, categorie: Category){
        setTodo({
            taskName: taskValue,
            deadline: deadLine,
            categorie: categorie
        })
    }
    
    function changeSetTodoList(taskValue: string, deadLine: string, categorie: Category){

        const newTodo =  {taskName:taskValue, deadline: deadLine, categorie}
        setTodoList([
            ...todoList,
            newTodo
        ]);
        changeSetToDo(newTodo.taskName, newTodo.deadline, newTodo.categorie)
        saveData({todoList, setTodoList});

        // try {
        //     changeSetToDo(newTodo.taskName, newTodo.deadline, newTodo.categorie)
        //     saveData(todo!,{todoList, setTodoList});
        // } catch (error) {
        //     // ya une erreur 
        // }finally{
        //     setTodoList([
        //         ...todoList,
        //         newTodo
        //     ]);
        // }
        // console.log(categorie.id);
        // colorCateg(newTodo)
    }

    function colorCateg(categ: { id: any; label: any; couleur: any; }){
        console.log("Id: " + categ.id + "Label: " + categ.label);
        let newCateg = categorie;
        console.log("Avant changement : " + JSON.stringify(newCateg))
        switch (categ.id) {
            case 0:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-secondary mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;
            
            case 1:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur: "card text-white bg-dark mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;

            case 2:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-warning mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;

            case 3:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-danger mb-3",
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;
        
            default:
                alert('error');
                break;
        }
        console.log("Après changement " + JSON.stringify(newCateg))
        setCategorie(newCateg);
        console.log(categorie);
    }

    return (<div>
            <div style={{
                textAlign : "center",
            }} >
                        <input type="text" name="task" placeholder="Entré votre tache"  value={taskValue} onChange={handleChange}></input>
                        <a> </a>
                        <input type="number" name="deadline" onChange={handleChange} placeholder="0" style={{
                            width : '50px'
                            }}>
                        </input>
                        <select name="divCateg" onChange={handleChange}>
                            <option id="0" onChange={handleChange}>
                                Pas Important
                            </option>
                            <option id="1"onChange={handleChange}>
                                Normal
                            </option>
                            <option id="2"onChange={handleChange}>
                                Important
                            </option>
                            <option id="3"onChange={handleChange}>
                                Très Important
                            </option>
                        </select>
                        <button type="submit" onClick={(() =>(changeSetTodoList(taskValue,deadLine,categorie))) } className="btn btn-primary"> Add</button>
                        <div className="cards" >
                            <ToDoLine todoList={todoList} setTodoList={setTodoList}/>
                       </div>
            </div>

        </div> 
    )
}