import React from "react";
import { saveData } from "../Service/LocalStrorageService"
import {v4 as uuidv4} from 'uuid';
import { ListToDos, getList } from "../Composant/ListTodos";


type DisplayAjoutProps = {
}

export function DisplayAjout() {
    let id = 0;
    function generateId(){     
        id =id + 1;
        return id;
    }

    return (<div style={{
        textAlign : "center",
    }}>
        <input type="text"></input>
        <button onClick={(() =>saveData(generateId(), "Ma valeur"))} type="submit" className="btn btn-outline-dark"> Add</button>
    </div>)
    
}