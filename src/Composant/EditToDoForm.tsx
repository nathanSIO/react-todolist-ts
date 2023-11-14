import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToDo } from "../Model/Todo";
import { Category } from "../Model/Category";
import { deleteLocalStorageData, saveData } from "../Service/LocalStorageService";

type EditToDoFormProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string,setEtat: Dispatch<SetStateAction<string>>
    todo:ToDo,setTodo: Dispatch<SetStateAction<ToDo>>
    currentTodo:ToDo | undefined,setCurrentTodo: Dispatch<SetStateAction<ToDo|undefined>>
}

export const EditToDoForm = ({todoList, setTodoList, etat, setEtat, todo, setTodo, currentTodo, setCurrentTodo}: EditToDoFormProps) => {
    //Formulaire de modifications et de création 

    const [taskValue, setTaskValue]=useState<string>("");
    const [deadLine, setDeadLine]=useState<string>("0");
    const [categorie, setCategorie]=useState<Category>({id:"",label:"", couleur:"card text-white bg-info mb-3"});

    const todoComp : ToDo = {taskName:"",deadline:"",categorie: {id:"",label:"", couleur:"card text-white bg-info mb-3"}}
    
    // const [todoList, setTodoList]= useState<ToDo[]>([]);

    useEffect(() => {
        setCurrentTodo(
            currentTodo
        );
      }, [])

    const handleChange = (event : React.ChangeEvent<any>)=> {
        // console.log("je suis rentré" + currentTodo)
        if(event.target.name=='task'){
            let newTaskValue = taskValue
            newTaskValue = event.target.value 
            setTaskValue(newTaskValue);
            // console.log("setTache " + JSON.stringify(taskValue))
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
        console.log("TaskValue : " + taskValue + "DeadLine : "+ deadLine + "Categorie : " + categorie)
        console.log("Afficher Todo : " + JSON.stringify(todo))
        if(taskValue != ""){
            // console.log("je rentre la")
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
        // console.log("moi " + JSON.stringify(todo))

        let newTodo:ToDo
         newTodo =  {taskName:taskValue, deadline: deadLine, categorie}
        console.log("Moi AAAAAAAAAAA " + JSON.stringify(todo))

        if ((JSON.stringify(todo) === JSON.stringify(todoComp))){
            console.log("je rentre dans la création ")
            changeSetToDo(newTodo.taskName, newTodo.deadline!, newTodo.categorie)
        }
        else{
            console.log("je rentre dans le todo")
            newTodoList.map(todoComp => {
                console.log("moi 2 " + JSON.stringify(todoComp))
                if (JSON.stringify(todo) == JSON.stringify(todoComp)){
                    console.log("je rentre dans la supression " + newTodoList.indexOf(todoComp))
                    newTodoList.splice(newTodoList.indexOf(todoComp), 1)
                }
            })
            update(newTodo.taskName, newTodo.deadline!, newTodo.categorie)
            newTodo = update(newTodo.taskName, newTodo.deadline!, newTodo.categorie)!
        }
        console.log("Mon nouveau NexTodo : " + newTodo)
        newTodoList.push(newTodo);
            setTodoList([
                ...todoList,
                todo
            ]);
        saveData(newTodoList);
        alert("je suis la ")
        setEtat(newEtat);     
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
                    couleur:"card text-white bg-info mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;
            
            case 1:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur: "card text-white bg-primary mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;

            case 2:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card text-white bg-secondary mb-3"
                }
                // console.log("mon Objet " + JSON.stringify(newCateg))
                break;

            case 3:
                console.log("Case : " + categ.id)
                newCateg = {
                    id: [categ.id].toString(),
                    label: [categ.label].toString(),
                    couleur:"card bg-warning mb-3",
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

        return (
            <form>
                <div> 
                    <a>Ma tâche : </a><input type="text" name="task" onChange={handleChange} defaultValue={todo?.taskName}></input>
                </div>    
                    <br/>
                <div>    
                    <a>Date limite  : </a><input type="date" name="deadline" onChange={handleChange} defaultValue={todo?.deadline!} >
                        {/* {todo.deadline} */}
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