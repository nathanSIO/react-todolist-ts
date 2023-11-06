import { Category } from "./Category";

export interface ToDo{
    taskName:string ;
    deadline:string | null;
    categorie:Category;
}