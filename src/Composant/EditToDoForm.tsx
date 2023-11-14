import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToDo } from "../Model/Todo";
import { Category } from "../Model/Category";
import { deleteLocalStorageData, saveData } from "../Service/LocalStorageService";
import toast from "react-hot-toast";

type EditToDoFormProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string,setEtat: Dispatch<SetStateAction<string>>
    todo:ToDo,setTodo: Dispatch<SetStateAction<ToDo>>
    currentTodo:ToDo | undefined,setCurrentTodo: Dispatch<SetStateAction<ToDo|undefined>>
}

export const EditToDoForm = ({todoList, setTodoList, etat, setEtat, todo, setTodo, currentTodo, setCurrentTodo}: EditToDoFormProps) => {

    const [taskValue, setTaskValue]=useState<string>("");
    const [deadLine, setDeadLine]=useState<string>("0");
    const [categorie, setCategorie]=useState<Category>({id:"",label:"", couleur:"card text-white bg-info mb-3"});

    const todoComp : ToDo = {taskName:"",deadline:"",categorie: {id:"",label:"", couleur:"card text-white bg-info mb-3"}}

    useEffect(() => {
        setCurrentTodo(
            currentTodo
        );
      }, [])

    const handleChange = (event : React.ChangeEvent<any>)=> {

        if(event.target.name=='task'){
            let newTaskValue = taskValue
            newTaskValue = event.target.value 
            setTaskValue(newTaskValue);
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
            taskName: taskValue ,
            deadline: deadLine,
            categorie: categorie
        })
           
            
    }
    
    function update(taskValue: string, deadLine: string, categorie: Category){
        if(taskValue != ""){
            setTodo({
                taskName: taskValue ,
                deadline : todo.deadline,
                categorie: todo.categorie
            })
            return({
                taskName: taskValue ,
                deadline : todo.deadline,
                categorie: todo.categorie
            })
        }
        else if (deadLine != "0") {
            setTodo({
                taskName: todo.taskName,
                deadline: deadLine!,
                categorie: todo.categorie 
            })
            return({
                taskName: todo.taskName,
                deadline: deadLine!,
                categorie: todo.categorie 
            })
        }
        else if (JSON.stringify(categorie) != "{id:'',label:'', couleur:'card text-white bg-info mb-3'}"){
            setTodo({
                taskName : todo.taskName,
                deadline : todo.deadline!,
                categorie: categorie
            })
            return ({
                taskName : todo.taskName,
                deadline : todo.deadline!,
                categorie: categorie
            })
        }
    }
    


    
    
    function changeSetTodoList(taskValue: string, deadLine: string, categorie: Category){
        
        let newEtat= "todo";
        let newTodoList = [...todoList]

        let newTodo:ToDo
         newTodo =  {taskName:taskValue, deadline: deadLine, categorie}

        if ((JSON.stringify(todo) === JSON.stringify(todoComp))){
            changeSetToDo(newTodo.taskName, newTodo.deadline!, newTodo.categorie)
        }
        else{
            newTodoList.map(todoComp => {
                if (JSON.stringify(todo) == JSON.stringify(todoComp)){
                    newTodoList.splice(newTodoList.indexOf(todoComp), 1)
                }
            })
            update(newTodo.taskName, newTodo.deadline!, newTodo.categorie)
            newTodo = update(newTodo.taskName, newTodo.deadline!, newTodo.categorie)!
        }
        newTodoList.push(newTodo);
            setTodoList([
                ...todoList,
                todo
            ]);
        saveData(newTodoList);
        setEtat(newEtat);     
    }

    function colorCateg(categ: { id: any; label: any; couleur: any; }){
        let newCateg = categorie;
        switch (categ.id) {
            case 0:
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-info mb-3"
                }
                break;
            
            case 1:
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur: "card text-white bg-primary mb-3"
                }
                break;

            case 2:
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-secondary mb-3"
                }
                break;

            case 3:
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card bg-warning mb-3",
                }
                break;
        
            default:
                alert('error');
                break;
        }
        setCategorie(newCateg);
    }

        return (
            <form>
                <div> 
                    <a>Ma tâche : </a><input type="text" name="task" onChange={handleChange} defaultValue={todo?.taskName}></input>
                </div>    
                    <br/>
                <div>    
                    <a>Date limite  : </a><input type="date" name="deadline" onChange={handleChange} defaultValue={todo?.deadline!} >
                    </input>
                </div>
                <br/>
                <div>
                    <a>Importance : </a>
                    <select name="divCateg" onChange={handleChange} id={todo?.categorie.id}>
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
                </div>
                <br/>
                <div>
                    <button type="submit" onClick={(() =>(changeSetTodoList(taskValue,deadLine,categorie))) } className="btn btn-success"> Add</button>                            
                </div>
            </form>
        )
    
}