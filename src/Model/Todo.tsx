export class ToDo{

    private nom :string;
    
    private categorie : string;

    private dateLimite : Date;

    constructor(unNom:string, uneCategorie:string, uneDateLimite:Date){
        this.nom = unNom;
        this.categorie = uneCategorie;
        this.dateLimite= uneDateLimite;
    }

    getNom(){
        return `${this.nom}`;
    }

    setNom(nom:string){
        this.nom = nom;
        return `${this.nom}`;
    }

    getCategorie(){
        return `${this.categorie}`;
    }

    setCategorie(categorie:string){
        this.categorie = categorie;
        return `${this.categorie}`;
    }

    getDateLimite(){
        return `${this.dateLimite}`;
    }

    setDateLimite(dateLimite:Date){
        this.dateLimite = dateLimite;
        return `${this.dateLimite}`;
    }
}