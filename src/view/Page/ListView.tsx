import React from "react";
import { ItemCard } from "../ItemCard";
import { TodoLine } from "../../model/TodoLine";

type ListViewProps = {
  items: TodoLine[];
  addItem(): void;
  editItem(todo: TodoLine): void;
  deleteItem(todo: TodoLine): void;
};

export const ListView = ({
  items,
  addItem,
  editItem,
  deleteItem,
}: ListViewProps) => {
  return (
    <div>
      <input
        type="button"
        onClick={() => addItem()}
        name={"Ajouter"}
        value={"Ajouter une tâche"}
      />
      <div>
        <div>
          {items.map((item, index) => (
            <ItemCard
              index={index}
              key={"item-" + index}
              item={item}
              editAction={() => editItem(item)}
              deleteAction={() => deleteItem(item)}
            ></ItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};
