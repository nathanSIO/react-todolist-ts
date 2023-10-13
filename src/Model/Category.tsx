export class Category{

    private id : number;
    
    private label : string;

    private couleur : string;

    constructor (unId:number, unLabel:string, uneCouleur:string){
        this.id = unId;
        this.label = unLabel;
        this.couleur = uneCouleur;
    }

    getId(){
        return `${this.id}`;
    }

    setId(id:number){
        this.id = id;
        return `${this.id}`;
    }

    getLabel(){
        return `${this.label}`;
    }

    setLabel(label:string){
        this.label = label;
        return `${this.label}`;
    }

    getCouleur(){
        return `${this.couleur}`;
    }

    setCouleur(couleur:string){
        this.couleur = couleur;
        return `${this.couleur}`;
    }
}