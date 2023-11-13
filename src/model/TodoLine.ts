export interface TodoLine {
  id: string;
  name: string;
  deadLine: string;
  categorie?: string;
}

export interface TodoLineCRU {
  name?: string;
  deadLine?: string;
  categorie?: string;
}
