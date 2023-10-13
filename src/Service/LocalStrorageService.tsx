import { getList } from "../Composant/ListTodos";

export const LocalStorageService = () => {
   
}
export function  saveData(key:number, value:string){
   localStorage.setItem(key.toString(),value);
   console.log("je suis la " + localStorage.getItem(key.toString()) + " key : " + key)
   getList();
   
    // return(saveData);
}