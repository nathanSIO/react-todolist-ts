import { Category } from "./Category";

export interface ToDo{
    // id: string;
    taskName:string ;
    deadline:string | null;
    categorie:Category;
}