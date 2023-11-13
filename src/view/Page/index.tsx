import React, { useEffect, useState } from "react";
import LocalStorageService from "../../service/LocalStorageService";
import { View, ViewMode } from "../../model/viewMode";
import { Content } from "./Content";
import { TodoLine } from "../../model/TodoLine";

const localStorageService = new LocalStorageService();

export const Page = () => {
  const [items, setItems] = useState<TodoLine[] | null>(null);
  const [view, setView] = useState<View>({ type: ViewMode.LIST });

  useEffect(() => {
    setItems(localStorageService.getData());
  }, []);

  function addItem() {
    setView({ type: ViewMode.FORM });
  }

  function editItem(todo: TodoLine) {
    setView({ type: ViewMode.FORM, params: todo });
  }

  function deleteItem(todo: TodoLine) {
    if (todo.id) {
      localStorageService.removeData(todo.id);
      setItems(localStorageService.getData());
    }
  }

  const returnToList = () => {
    setView({ type: ViewMode.LIST });
    // each time we return to list, we load the last stored data
    setItems(localStorageService.getData());
  };

  return (
    <div style={{ margin: "45px" }}>
      <h2>TODO Manager</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Content
          view={view}
          items={items}
          addItem={addItem}
          editItem={editItem}
          deleteItem={deleteItem}
          returnToList={returnToList}
        />
      </div>
    </div>
  );
};
