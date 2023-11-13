import { TodoLine } from "../model/TodoLine";

interface ItemCardProps {
  index: number;
  item: TodoLine;
  editAction: (item: TodoLine) => void;
  deleteAction: (item: TodoLine) => void;
}

export const ItemCard = (props: ItemCardProps) => {
  function getColor() {
    if (props.item.categorie !== undefined) {
      switch (props.item.categorie.toLowerCase()) {
        case "pas important":
          return "#b3df92";
        case "normal":
          return "#f0f17b";
        case "important":
          return "#f7aa58";
        case "très important":
          return "#f35a2d";
      }
    }
    console.log("[" + props.item.categorie + "]");
    return "#857e76";
  }

  return (
    <div
      style={{
        border: "5px solid " + getColor(),
        borderRadius: "10px",
        width: "330px",
        marginTop: "35px",
        padding: "10px",
      }}
    >
      <table>
        <tbody>
          <tr>
            <td align={"left"} colSpan={2}>
              <h5>
                {props.index}) {props.item.name}
              </h5>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="submit"
                onClick={() => props.editAction(props.item)}
                className="btn btn-light"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="submit"
                onClick={() => props.deleteAction(props.item)}
                className="btn btn-light"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
