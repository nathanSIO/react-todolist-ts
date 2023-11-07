import { Dispatch, SetStateAction, useState } from "react";
import { ToDo } from "../Model/Todo";
import { Category } from "../Model/Category";
import { saveData } from "../Service/LocalStorageService";

type EditToDoFormProps = {
    todoList: ToDo[],setTodoList: Dispatch<SetStateAction<ToDo[]>>
    etat:string,setEtat: Dispatch<SetStateAction<string>>
}

export const EditToDoForm = ({todoList, setTodoList}: EditToDoFormProps, {etat, setEtat} : EditToDoFormProps) => {
    //Formulaire de modifications et de création 

    const [taskValue, setTaskValue]=useState<string>("");
    const [deadLine, setDeadLine]=useState<string>("0");
    const [categorie, setCategorie]=useState<Category>({id:"",label:"", couleur:"card text-white bg-info mb-3"});
    const [todo, setTodo] = useState<ToDo>({taskName:taskValue,deadline:deadLine,categorie: categorie});
    // const [todoList, setTodoList]= useState<ToDo[]>([]);

    const handleChange = (event : React.ChangeEvent<any>)=> {
        // console.log("je suis rentré")
        if(event.target.name=='task'){
            let newTaskValue = taskValue
            newTaskValue = event.target.value 
            setTaskValue(newTaskValue);
            console.log("setTache " + JSON.stringify(taskValue))
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
    
    function changeSetTodoList(taskValue: string, deadLine: string, categorie: Category){

        let newEtat= "todo";
        let newTodoList = [...todoList]
        
        const newTodo =  {taskName:taskValue, deadline: deadLine, categorie}
        newTodoList.push(newTodo);
        // console.log("je cherche : " + JSON.stringify(newTodo))
        changeSetToDo(newTodo.taskName, newTodo.deadline, newTodo.categorie)
        // console.log("1: "+JSON.stringify(todo))
        if (todo.taskName != ""){
            setTodoList([
                ...todoList,
                todo
            ]);
            // console.log("2 if: "+ JSON.stringify(todo))
        }
        else {
            changeSetToDo(newTodo.taskName, newTodo.deadline, newTodo.categorie)
            setTodoList([
                ...todoList,
                todo
            ]);
            // console.log("2 else: "+ JSON.stringify(todo))
        }
        
        // changeSetToDo(newTodo.taskName, newTodo.deadline, newTodo.categorie)
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
                <input type="text" name="task" placeholder="Entré votre tache"   onChange={handleChange}></input>
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
                <button type="submit" onClick={(() =>(changeSetTodoList(taskValue,deadLine,categorie))) } className="btn btn-light"> Add</button>                            
            </div>
        </form>
    )
}