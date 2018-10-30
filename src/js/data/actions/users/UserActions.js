'use strict';

import RowDispatcher from "../../dispatchers/RowDispatcher";
import UserActionTypes from "./UserActionType";

const UserActions = {
  addUserAction(name, lastSession, actions) {
    RowDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      name, lastSession, actions
    });
  },
  getSmall() {
    RowDispatcher.dispatch({
      type: UserActionTypes.GET_SMALL,
    });
  }
};

export default UserActions;
