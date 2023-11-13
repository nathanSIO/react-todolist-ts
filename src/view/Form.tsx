import TodoLine from "../model/TodoLine";
import LocalStorageService from "../service/LocalStorageService";
import {v4 as uuidv4} from 'uuid';

interface FormProps {
    item : undefined | TodoLine,
    goToListView : () => void
}

interface FormState {
    item: undefined | TodoLine
}

export const Form = (props : FormProps, state: FormState) => {

    function saveItem() {

        const name = document.querySelector("#name") as HTMLInputElement
        const categorie = document.querySelector("#categorie") as HTMLSelectElement
        const deadline = document.querySelector("#deadline") as HTMLSelectElement

        let todo = new TodoLine()
        todo.id = props.item!=null ? props.item.id : uuidv4()
        todo.name = name.value
        todo.categorie = categorie.value
        todo.deadLine = deadline.value

        if (name.value!=null && name.value!=='' && deadline.value!=null && deadline.value!=='') {
            console.log(name.value+" "+deadline.value)
            new LocalStorageService().addData(todo)
            props.goToListView()
        }
    }

    function cancel() {
        props.goToListView()
    }

    return <table cellSpacing={10} cellPadding={10}>
        <tbody>
        <tr>
            <td>Nom</td>
            <td><input type={"text"} name={"label"} id={"name"} value={props.item?.name}/></td>
        </tr>
        <tr>
            <td>Catégorie</td>
            <td>
                <select id={"categorie"} defaultValue={props.item?.categorie ?? 0} style={{width:"100%"}}>
                    <option id="0">
                        Pas important
                    </option>
                    <option id="1">
                        Normal
                    </option>
                    <option id="2">
                        Important
                    </option>
                    <option id="3">
                        Très important
                    </option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Nombre de jours</td>
            <td><input type={"number"} name={"deadline"} id={"deadline"} value={props.item?.deadLine}/></td>
        </tr>
        <tr>
            <td align={"center"}>
                <button type="submit" onClick={() => saveItem()} className="btn btn-light">Enregistrer</button>
            </td>
            <td align={"center"}>
                <button type="submit" onClick={() => cancel()} className="btn btn-light">Annuler</button>
            </td>
        </tr>
        </tbody>
    </table>
}
