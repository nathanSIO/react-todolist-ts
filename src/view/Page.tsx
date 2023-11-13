import React, {ReactElement, useState} from "react";
import {Form} from "./Form";
import {ItemCard} from "./ItemCard";
import LocalStorageService from "../service/LocalStorageService";
import TodoLine from "../model/TodoLine";

export const Page = () => {

    const VIEW_LIST_MODE = "list"
    const VIEW_FORM_MODE = "form"

    const [item, setItem] = useState<TodoLine>()
    const [view, setView] = useState("list")
    const [count, forceRefresh] = useState(0)

    function getView() {
        if (view === VIEW_LIST_MODE) {
            return getListView()
        } else if (item!=null) {
            return <Form item={item} goToListView={()=>setView(VIEW_LIST_MODE)} />
        } else {
            return <Form item={undefined} goToListView={()=>setView(VIEW_LIST_MODE)} />
        }
    }

    function addItem() {
        setItem(undefined)
        setView(VIEW_FORM_MODE)
    }

    function editItem(todo: TodoLine) {
        setItem(todo)
        setView(VIEW_FORM_MODE)
    }

    function deleteItem(todo: TodoLine) {
        new LocalStorageService().removeData(todo.id!)
        forceRefresh(count+1)
    }

    function getListView() {

        const items : ReactElement[] = []

        let i = 0
        new LocalStorageService().getData().forEach(item => {
            items.push(<ItemCard index={i++}
                item={item}
                editAction={()=>editItem(item)}
                deleteAction={()=>deleteItem(item)}></ItemCard>)
        })

        return <div>
            <input type="button" onClick={()=>addItem()} name={"Ajouter"} value={"Ajouter une tâche"} />
            <div>
            <div>
                {items}
            </div>
        </div>
        </div>
    }

    return <div style={{margin:"45px"}}>
        <h2>TODO Manager</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            {getView()}
        </div>
    </div>
}
