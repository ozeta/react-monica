import RowActionTypes from "./RowActionTypes";
import RowDispatcher from "../Dispatchers/RowDispatcher";

const Actions = {
  addRow(text) {
    RowDispatcher.dispatch({
      type: RowActionTypes.ADD_USER,
      text
    });
  }
};

export default Actions;
