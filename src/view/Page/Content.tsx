import React from "react";
import { View, ViewMode } from "../../model/viewMode";
import { Form } from "../Form";
import { ListView } from "./ListView";
import { TodoLine } from "../../model/TodoLine";

type ContentProps = {
  view: View;
  items: TodoLine[] | null;
  addItem(): void;
  editItem(todo: TodoLine): void;
  deleteItem(todo: TodoLine): void;
  returnToList: () => void;
};

export const Content = ({
  view,
  items,
  addItem,
  editItem,
  deleteItem,
  returnToList,
}: ContentProps) => {
  if (!items) {
    return null;
  }

  return (
    <>
      {view.type === ViewMode.LIST && (
        <ListView
          addItem={addItem}
          editItem={editItem}
          deleteItem={deleteItem}
          items={items}
        />
      )}
      {view.type !== ViewMode.LIST &&
        (view.params !== null ? (
          <Form item={view.params} goToListView={returnToList} />
        ) : (
          <Form goToListView={returnToList} />
        ))}
    </>
  );
};
