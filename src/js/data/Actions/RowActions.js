'use strict';

import RowDispatcher from "../dispatchers/RowDispatcher";
import TodoActionTypes from "./RowActionTypes";

const RowActions = {
  addAction(text) {
    RowDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text
    });
  }
};

export default RowActions;
