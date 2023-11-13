import { TodoLine } from "./TodoLine";

export enum ViewMode {
  LIST = "list",
  FORM = "form",
}

export interface View {
  type: ViewMode;
  params?: TodoLine;
}
