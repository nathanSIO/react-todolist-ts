import { useEffect, useRef, useState } from "react";
import { TodoLine, TodoLineCRU } from "../model/TodoLine";
import LocalStorageService from "../service/LocalStorageService";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  item?: TodoLine;
  goToListView: () => void;
}

const localStorageService = new LocalStorageService();

export const Form = ({ item, goToListView }: FormProps) => {
  const [value, setValue] = useState<TodoLineCRU | null>(null);

  /** ici, il arrive quand on utilise un state au sein d'une fonction (comme ici value dans saveItem) que la fonction crée une cloture
   * du state, ie, meme si la valeur du state change, la fonction ne le "voie" pas.
   * Un solution est de crée une ref sur ce state (avec la syntaxe suivante) (une ref est essentiellement un pointeur) pour pouvoir recuper via
   * la propriété current la derniere valeur.
   *
   * remarque, parfois ce n'est pas necessaire, mais c'est tjs plus sur
   *
   *  @link https://legacy.reactjs.org/docs/hooks-faq.html (Why am I seeing stale props or state inside my function?)
   */
  const latestValue = useRef<TodoLineCRU | null>(null);
  latestValue.current = value;

  useEffect(() => {
    setValue(item ?? null);
  }, []);

  useEffect(() => console.log(value), [value]);

  const saveItem = () => {
    const todo = {
      ...(latestValue.current ?? {}),
      id: item != null ? item.id : uuidv4(),
    };

    if (
      todo.name &&
      todo.name !== "" &&
      todo.deadLine &&
      todo.deadLine !== ""
    ) {
      console.log("");
      console.log(todo.name + " " + todo.deadLine);
      localStorageService.addData(todo as TodoLine);
      goToListView();
    }
  };

  function cancel() {
    goToListView();
  }

  const handleChange = (key: string, value: unknown) => {
    setValue((current) => ({ ...current, [key]: value }));
  };

  return (
    <table cellSpacing={10} cellPadding={10}>
      <tbody>
        <tr>
          <td>Nom</td>
          <td>
            <input
              type={"text"}
              name={"label"}
              id={"name"}
              value={value?.name ?? ""}
              onChange={(event) => handleChange("name", event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Catégorie</td>
          <td>
            <select
              id={"categorie"}
              defaultValue={value?.categorie ?? 0}
              style={{ width: "100%" }}
              onChange={(event) =>
                handleChange("categorie", event.target.value)
              }
            >
              <option id="0">Pas important</option>
              <option id="1">Normal</option>
              <option id="2">Important</option>
              <option id="3">Très important</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Nombre de jours</td>
          <td>
            <input
              type={"number"}
              name={"deadLine"}
              id={"deadLine"}
              value={value?.deadLine ?? 0}
              onChange={(event) =>
                handleChange("deadLine", parseInt(event.target.value))
              }
            />
          </td>
        </tr>
        <tr>
          <td align={"center"}>
            <button
              type="submit"
              onClick={() => saveItem()}
              className="btn btn-light"
            >
              Enregistrer
            </button>
          </td>
          <td align={"center"}>
            <button
              type="submit"
              onClick={() => cancel()}
              className="btn btn-light"
            >
              Annuler
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
